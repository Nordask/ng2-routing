"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var about_component_1 = require("./about.component");
var about_user_component_1 = require("./about-user.component");
var about_section_component_1 = require("./about-section.component");
var about_users_resolve_service_1 = require("./about-users-resolve.service");
var about_user_resolve_service_1 = require("./about-user-resolve.service");
var aboutRoutes = [
    {
        path: '',
        component: about_section_component_1.AboutSectionComponent,
        children: [
            {
                path: '',
                component: about_component_1.AboutComponent,
                data: {
                    message: 'this is my data message'
                },
                resolve: {
                    users: about_users_resolve_service_1.AboutUsersResolve
                }
            },
            {
                path: ':userName',
                component: about_user_component_1.AboutUserComponent,
                resolve: {
                    user: about_user_resolve_service_1.AboutUserResolve
                }
            }
        ]
    }
];
exports.aboutRouting = router_1.RouterModule.forChild(aboutRoutes);
//# sourceMappingURL=about.routing.js.map