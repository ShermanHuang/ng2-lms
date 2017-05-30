"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var inventory_component_1 = require("../pages/inventory/inventory.component");
var viewdetails_component_1 = require("../pages/viewdetails/viewdetails.component");
var login_component_1 = require("../pages/login/login.component");
var adminlogin_component_1 = require("../pages/adminlogin/adminlogin.component");
var dashboard_component_1 = require("../pages/dashboard/dashboard.component");
var users_component_1 = require("../pages/users/users.component");
var books_component_1 = require("../pages/books/books.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: inventory_component_1.InventoryComponent },
    { path: 'viewdetails/:id', component: viewdetails_component_1.ViewDetailsComponent },
    { path: 'userLogin', component: login_component_1.LoginComponent },
    { path: 'adminLogin', component: adminlogin_component_1.AdminLoginComponent },
    {
        path: 'dashboard', component: dashboard_component_1.DashboardComponent,
        children: [
            { path: '', redirectTo: 'users', pathMatch: 'full' },
            { path: 'users', component: users_component_1.UserComponent },
            { path: 'books', component: books_component_1.BooksComponent }
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map