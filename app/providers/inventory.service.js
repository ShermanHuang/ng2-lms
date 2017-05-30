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
var http_1 = require("@angular/http");
var books_mock_1 = require("../data/books-mock");
require("rxjs/Rx");
require("rxjs/add/operator/toPromise");
var InventoryService = (function () {
    function InventoryService(http) {
        this.http = http;
    }
    InventoryService.prototype.loadInventory = function () {
        return books_mock_1.BOOKS;
    };
    InventoryService.prototype.loadInventoryUsingPromise = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        })
            .then(function () {
            return _this.http.get('app/data/books.json').toPromise().then(function (response) { return response.json(); });
        });
    };
    InventoryService.prototype.loadInventoryUsingObservable = function () {
        return this.http.get('app/data/books.json').map(function (res) { return res.json(); });
    };
    InventoryService.prototype.getBookById = function (id) {
        return this.loadInventory().find(function (book) { return book.bookId == id; });
    };
    return InventoryService;
}());
InventoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], InventoryService);
exports.InventoryService = InventoryService;
//# sourceMappingURL=inventory.service.js.map