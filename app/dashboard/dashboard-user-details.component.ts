import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    template: `
        <div class="jumbotron">
            <div *ngIf="user">
                <h2>{{user.name}}</h2>

                <div class="form-group">
                    <input type="text" [(ngModel)]="editName" class="form-control">        
                </div>
                
                <div class="form-group text-center">
                    <button (click)="save()" class="btn btn-success">Save</button>    
                    <button (click)="cancel()" class="btn btn-danger">Cancel</button>  
                </div>
            </div>
        </div>    
    `
})
export class DashboardUserDetailsComponent implements OnInit {
    user: User;
    editName: string;

    constructor(private service: UserService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
        this.route.params.forEach(params => {
            let userName = params['userName'];
            this.service.getUser(userName).then(user => {
                console.log(user);
                this.user = user;
                this.editName = user.name;
            });    
        })

        /* updates only one time
        let userName = this.route.snapshot.params["userName"];
        this.service.getUser(userName).then(user => this.user = user);
        */
    }

    cancel() {
        this.router.navigate(['/dashboard/users']);
    }

    save() {
        this.user.name = this.editName;
        this.router.navigate(['/dashboard/users']);
    }

    canDeactivate() {
        console.log('i am navigating away');
        if(this.user.name !== this.editName) {
            return window.confirm('Discard changes?');
        }
        return true;
    }
}