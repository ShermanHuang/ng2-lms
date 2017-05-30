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
var inventory_service_1 = require("../../providers/inventory.service");
var UserComponent = (function () {
    function UserComponent(inventoryService, router) {
        this.inventoryService = inventoryService;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.users = JSON.parse(localStorage.getItem('users'));
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dashboard',
        templateUrl: 'users.component.html',
        providers: [inventory_service_1.InventoryService]
    }),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService, router_1.Router])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=users.component.js.map