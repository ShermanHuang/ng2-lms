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
var AdminLoginComponent = (function () {
    function AdminLoginComponent(route, router) {
        this.route = route;
        this.router = router;
        this.model = {};
        this.loading = false;
        this.sessionUser = "";
        this.errorMessage = '';
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
        this.sessionUser = JSON.parse(localStorage.getItem('loginUser'));
        if (this.sessionUser) {
            this.router.navigateByUrl('home');
        }
    };
    AdminLoginComponent.prototype.login = function () {
        this.loading = true;
        console.log(this.model.username, this.model.password);
        if (this.model.username == 'admin' && this.model.password == 'admin') {
            this.loading = false;
            this.errorMessage = '';
            localStorage.setItem('loginUser', JSON.stringify(this.model.username));
            this.router.navigateByUrl('dashboard');
        }
        else {
            this.errorMessage = 'Incorrect Username and Password ';
            this.loading = false;
        }
    };
    return AdminLoginComponent;
}());
AdminLoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'adminlogin.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], AdminLoginComponent);
exports.AdminLoginComponent = AdminLoginComponent;
//# sourceMappingURL=adminlogin.component.js.map