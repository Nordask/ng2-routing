import { Component } from '@angular/core';
import { User } from '../shared/models/user';
//import { UserService } from '../shared/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about-page',
  styles: [`
    .profile-card 
    {
      background: #f3f3f3;
      border-radius: 4px;
      padding: 30px;
      text-align: center;
    }

    .profile-card img
    {
      max-width: 300px;
      margin: 15px auto;
    }
  `],
  template: `
    <div class="row" *ngIf="users">
      <div class="col-sm-4" *ngFor="let user of users">
        <div class="profile-card" [routerLink]="['/about', user.userName]">
          <img [src]="user.avatar" class="img-responsive img-circle">
          <h2>{{user.name}}</h2>
          <p><a href="https://twitter.com">{{user.userName}}</a></p>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {
  users: User[];

  constructor(/*private service: UserService, */private route: ActivatedRoute) {}

  ngOnInit() {
    //this.service.getUsers().then(users => this.users = users); // refactored decision below

    this.route.data.forEach((data: {users: User[]}) => {
      console.log(data);
      this.users = data.users;
    });
  }
}
