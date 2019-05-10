import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
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
  ]);

@Injectable()
export class UserService {

    // get all users
    getUsers() {
        return usersPromise;
    }
    //find a specific user
    getUser(userName) {
        return usersPromise.then(users => users.find(user => 
            user.userName === userName
        ));   
    }
}