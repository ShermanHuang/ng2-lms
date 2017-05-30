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
var LoginComponent = (function () {
    function LoginComponent(route, router) {
        this.route = route;
        this.router = router;
        this.model = {};
        this.loading = false;
        this.loginIs = false;
        this.sessionUser = '';
        this.message = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.users = JSON.parse(localStorage.getItem('users'));
        this.sessionUser = JSON.parse(localStorage.getItem('loginUser'));
        if (this.sessionUser) {
            this.router.navigateByUrl('home');
        }
    };
    LoginComponent.prototype.login = function () {
        this.loading = true;
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].username == this.model.username && this.users[i].password == this.model.password) {
                this.loginIs = true;
            }
            else {
                this.loginIs = false;
            }
        }
        if (this.loginIs) {
            this.message = 'login success';
            this.loading = false;
            localStorage.setItem('loginUser', JSON.stringify(this.model.username));
            location.reload();
            this.router.navigateByUrl('home');
        }
        else {
            this.message = 'Incorrect Login';
            this.loading = false;
        }
        console.log(this.model.username, this.model.password);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map