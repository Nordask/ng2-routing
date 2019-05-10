import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
    styles: [`
        img
        {
            max-width: 50%;
            margin: 20px auto;
        }
    `],
    template: `
        <a (click)="goBack()" class="btn btn-sm btn-info">Go Back</a>
        <div class="jumbotron text-center" *ngIf="user">
            <h1>{{user.name}}({{user.userName}})</h1>
            
            <img [src]="user.avatar" class="img-responsive img-circle">
        </div>
    `
})
export class AboutUserComponent implements OnInit {
    user: User;

    constructor(private route: ActivatedRoute, private service: UserService, private router: Router) {

    }

    ngOnInit() {
        let userName = this.route.snapshot.params['userName'];
        
        this.service.getUser(userName).then(user => {
          this.user = user;
        });
    }

    goBack() {
        //window.history.back();
        this.router.navigate(['/about']);
    }
}
