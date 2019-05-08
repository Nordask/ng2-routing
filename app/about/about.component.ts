import { Component } from '@angular/core';

export class User {
  id: number;
  name: string;
  userName:  string;
  avatar: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'Chris',
    userName: 'user1',
    avatar: 'assets/pictures/avatar1.jpg'
  },
  {
    id: 2,
    name: 'Tom',
    userName: 'user2',
    avatar: 'assets/pictures/avatar2.jpg'
  },
  {
    id: 3,
    name: 'Holly',
    userName: 'user3',
    avatar: 'assets/pictures/avatar3.jpg'
  },
]
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
  users: User[] = users;
}
