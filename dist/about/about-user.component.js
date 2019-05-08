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
var router_1 = require("@angular/router");
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var users = [
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
];
var AboutUserComponent = (function () {
    function AboutUserComponent(route) {
        this.route = route;
    }
    AboutUserComponent.prototype.ngOnInit = function () {
        var userName = this.route.snapshot.params['userName'];
        this.user = users.find(function (user) {
            return user.userName === userName;
        });
        console.log(userName);
    };
    return AboutUserComponent;
}());
AboutUserComponent = __decorate([
    core_1.Component({
        styles: ["\n        img\n        {\n            max-width: 50%;\n            margin: 20px auto;\n        }\n    "],
        template: "\n        <div class=\"jumbotron text-center\" *ngIf=\"user\">\n            <h1>{{user.name}}({{user.userName}})</h1>\n            \n            <img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], AboutUserComponent);
exports.AboutUserComponent = AboutUserComponent;
//# sourceMappingURL=about-user.component.js.map