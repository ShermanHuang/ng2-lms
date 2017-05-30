"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var login_component_1 = require("./pages/login/login.component");
var register_component_1 = require("./pages/register/register.component");
var adminlogin_component_1 = require("./pages/adminlogin/adminlogin.component");
var inventory_component_1 = require("./pages/inventory/inventory.component");
var viewdetails_component_1 = require("./pages/viewdetails/viewdetails.component");
var dashboard_component_1 = require("./pages/dashboard/dashboard.component");
var users_component_1 = require("./pages/users/users.component");
var books_component_1 = require("./pages/books/books.component");
var search_filter_1 = require("./pipes/search-filter");
var sort_by_1 = require("./pipes/sort-by");
var app_routing_module_1 = require("./routing/app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            inventory_component_1.InventoryComponent,
            viewdetails_component_1.ViewDetailsComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            adminlogin_component_1.AdminLoginComponent,
            dashboard_component_1.DashboardComponent,
            users_component_1.UserComponent,
            books_component_1.BooksComponent,
            search_filter_1.SearchPipe,
            sort_by_1.SortByPipe
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map