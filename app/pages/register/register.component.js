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
var RegisterComponent = (function () {
    function RegisterComponent(inventoryService, route, router) {
        this.inventoryService = inventoryService;
        this.route = route;
        this.router = router;
        this.model = {};
        this.loading = false;
        this.errorMessage = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.users = JSON.parse(localStorage.getItem('users'));
        var keys = Object.keys(this.users);
        var id = this.users[keys.length - 1].userId;
        this.model.userId = ++id;
        this.model.noOfBooks = 0;
        this.model.imgUrl = 'images/profile.png';
        this.model.books = [];
    };
    RegisterComponent.prototype.register = function () {
        this.loading = true;
        if (this.model.userId) {
            this.users.push(this.model);
            this.errorMessage = '';
            localStorage.setItem('users', JSON.stringify(this.users));
            this.router.navigateByUrl('userLogin');
        }
        else {
            this.errorMessage = 'Incorrect Username and Password ';
        }
        this.loading = false;
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'register.component.html',
        providers: [inventory_service_1.InventoryService]
    }),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService,
        router_1.ActivatedRoute,
        router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map