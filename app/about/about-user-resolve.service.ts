import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Injectable()
export class AboutUserResolve implements Resolve<User> {
    constructor(private service: UserService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot) {
        // grab current user name
        let userName = route.params['userName'];
        return this.service.getUser(userName).then(user => {
            if(user) {
                return user;
            } else {
                this.router.navigate(['/about']);
                return null;
            }             
        });
    }
}