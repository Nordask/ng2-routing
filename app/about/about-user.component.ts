import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    styles: [`
        img
        {
            max-width: 50%;
            margin: 20px auto;
        }
    `],
    template: `
        <div class="jumbotron text-center" *ngIf="user">
            <h1>{{user.name}}({{user.userName}})</h1>
            
            <img [src]="user.avatar" class="img-responsive img-circle">
        </div>
    `
})
export class AboutUserComponent implements OnInit {
    user;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        let userName = this.route.snapshot.params['userName'];
        
        this.user = users.find((user) => {
            return user.userName === userName;
        });
        
        console.log(userName);
    }
}
