import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { DashboardUsersComponent } from "./dashboard-users.component";
import { DashboardUserDetailsComponent } from "./dashboard-user-details.component";
import { DashboardUsersHomeComponent } from "./dashboard-users-home.component";
import { ModuleWithProviders } from "@angular/core";
import { AuthGuardService } from "../shared/guards/auth-guard.service";
import { CanDeactivateGuardService } from "../shared/guards/can-deactivate-guard.service";

export const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                canActivate: [AuthGuardService],
                component: DashboardComponent
            },
            {
                path: 'users',
                component: DashboardUsersComponent,
                canActivateChild: [AuthGuardService],
                children: [
                    {
                        path: '',
                        component: DashboardUsersHomeComponent
                    },
                    {
                        path: ':userName',
                        component: DashboardUserDetailsComponent,
                        canDeactivate: [CanDeactivateGuardService]
                    }
                ]
            }
        ]
    }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);