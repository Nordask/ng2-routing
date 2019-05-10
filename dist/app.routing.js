"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var not_found_component_1 = require("./not-found/not-found.component");
var about_user_component_1 = require("./about/about-user.component");
//              for validation
var appRoutes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'about/:userName', component: about_user_component_1.AboutUserComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent } // order is important, if it was first we will get only 404 page always 
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map