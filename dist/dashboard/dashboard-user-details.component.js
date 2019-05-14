"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../shared/services/user.service");
var router_1 = require("@angular/router");
var DashboardUserDetailsComponent = (function () {
    function DashboardUserDetailsComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    DashboardUserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var userName = params['userName'];
            _this.service.getUser(userName).then(function (user) {
                console.log(user);
                _this.user = user;
                _this.editName = user.name;
            });
        });
        /* updates only one time
        let userName = this.route.snapshot.params["userName"];
        this.service.getUser(userName).then(user => this.user = user);
        */
    };
    DashboardUserDetailsComponent.prototype.cancel = function () {
        this.router.navigate(['/dashboard/users']);
    };
    DashboardUserDetailsComponent.prototype.save = function () {
        this.user.name = this.editName;
        this.router.navigate(['/dashboard/users']);
    };
    DashboardUserDetailsComponent.prototype.canDeactivate = function () {
        console.log('i am navigating away');
        if (this.user.name !== this.editName) {
            return window.confirm('Discard changes?');
        }
        return true;
    };
    return DashboardUserDetailsComponent;
}());
DashboardUserDetailsComponent = __decorate([
    core_1.Component({
        template: "\n        <div class=\"jumbotron\">\n            <div *ngIf=\"user\">\n                <h2>{{user.name}}</h2>\n\n                <div class=\"form-group\">\n                    <input type=\"text\" [(ngModel)]=\"editName\" class=\"form-control\">        \n                </div>\n                \n                <div class=\"form-group text-center\">\n                    <button (click)=\"save()\" class=\"btn btn-success\">Save</button>    \n                    <button (click)=\"cancel()\" class=\"btn btn-danger\">Cancel</button>  \n                </div>\n            </div>\n        </div>    \n    "
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute,
        router_1.Router])
], DashboardUserDetailsComponent);
exports.DashboardUserDetailsComponent = DashboardUserDetailsComponent;
//# sourceMappingURL=dashboard-user-details.component.js.map