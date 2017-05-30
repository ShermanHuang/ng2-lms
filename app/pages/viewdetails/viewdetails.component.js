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
var ViewDetailsComponent = (function () {
    function ViewDetailsComponent(router, route, inventoryService) {
        this.router = router;
        this.route = route;
        this.inventoryService = inventoryService;
    }
    ViewDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return _this.inventoryService.getBookById(params['id']); })
            .subscribe(function (book) { return _this.book = book; });
    };
    return ViewDetailsComponent;
}());
ViewDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'selector',
        templateUrl: 'viewdetails.component.html',
        providers: [inventory_service_1.InventoryService]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, inventory_service_1.InventoryService])
], ViewDetailsComponent);
exports.ViewDetailsComponent = ViewDetailsComponent;
//# sourceMappingURL=viewdetails.component.js.map