import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user.component';
import { ModuleWithProviders } from '@angular/core';
import { AboutSectionComponent } from './about-section.component';
import { AboutUsersResolve } from './about-users-resolve.service';
import { AboutUserResolve } from './about-user-resolve.service';

const aboutRoutes: Routes = [
    {
        path: '',
        component: AboutSectionComponent,
        children: [
            {
                path: '',
                component: AboutComponent,
                data: { // going to route.data
                    message: 'this is my data message'    
                },
                resolve: { // going to route.data
                    users: AboutUsersResolve
                }
            },
            {
                path: ':userName',
                component: AboutUserComponent,
                resolve: {
                    user: AboutUserResolve
                }
            }
        ]
    }
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);