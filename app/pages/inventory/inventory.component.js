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
var InventoryComponent = (function () {
    function InventoryComponent(inventoryService, router) {
        this.inventoryService = inventoryService;
        this.router = router;
    }
    InventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sortByKey = "bookId";
        // this.inventoryService.loadInventoryUsingPromise().then(response => {
        //     this.books = response;
        // })
        this.inventoryService.loadInventoryUsingObservable().subscribe(function (books) {
            _this.books = books;
        }, function (error) { });
    };
    InventoryComponent.prototype.openDetails = function (id) {
        this.router.navigate(['/reports']);
    };
    return InventoryComponent;
}());
InventoryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'inventory',
        templateUrl: 'inventory.component.html',
        styleUrls: ['inventory.component.css'],
        providers: [inventory_service_1.InventoryService]
    }),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService, router_1.Router])
], InventoryComponent);
exports.InventoryComponent = InventoryComponent;
//# sourceMappingURL=inventory.component.js.map