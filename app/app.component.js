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
var inventory_service_1 = require("./providers/inventory.service");
;
var AppComponent = (function () {
    function AppComponent(inventoryService, router) {
        this.inventoryService = inventoryService;
        this.router = router;
        this.sessionUser = '';
        this.sessionUser = JSON.parse(localStorage.getItem('loginUser'));
        if (!JSON.parse(localStorage.getItem('users'))) {
            this.inventoryService.loadInventoryUsingObservable1().subscribe(function (users) {
                localStorage.setItem('users', JSON.stringify(users));
            }, function (error) { });
        }
        if (!JSON.parse(localStorage.getItem('books'))) {
            this.inventoryService.loadInventoryUsingObservable().subscribe(function (books) {
                localStorage.setItem('books', JSON.stringify(books));
            }, function (error) { });
        }
    }
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('loginUser');
        location.reload();
        this.router.navigateByUrl('home');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        providers: [inventory_service_1.InventoryService]
    }),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map