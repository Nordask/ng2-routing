"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var dashboard_users_component_1 = require("./dashboard-users.component");
var dashboard_user_details_component_1 = require("./dashboard-user-details.component");
var dashboard_users_home_component_1 = require("./dashboard-users-home.component");
var auth_guard_service_1 = require("../shared/guards/auth-guard.service");
var can_deactivate_guard_service_1 = require("../shared/guards/can-deactivate-guard.service");
exports.dashboardRoutes = [
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                canActivate: [auth_guard_service_1.AuthGuardService],
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: 'users',
                component: dashboard_users_component_1.DashboardUsersComponent,
                canActivateChild: [auth_guard_service_1.AuthGuardService],
                children: [
                    {
                        path: '',
                        component: dashboard_users_home_component_1.DashboardUsersHomeComponent
                    },
                    {
                        path: ':userName',
                        component: dashboard_user_details_component_1.DashboardUserDetailsComponent,
                        canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuardService]
                    }
                ]
            }
        ]
    }
];
exports.dashboardRouting = router_1.RouterModule.forChild(exports.dashboardRoutes);
//# sourceMappingURL=dashboard.routing.js.map