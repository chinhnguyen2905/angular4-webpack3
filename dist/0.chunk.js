webpackJsonp([0],{

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_module_1 = __webpack_require__(292);
var core_1 = __webpack_require__(10);
var shop_routing_module_1 = __webpack_require__(755);
var ShopModule = /** @class */function () {
    function ShopModule() {}
    ShopModule = __decorate([core_1.NgModule({
        imports: [shop_routing_module_1.ShopRoutingModule, shared_module_1.SharedModule],
        declarations: [shop_routing_module_1.routedComponents],
        providers: []
    })], ShopModule);
    return ShopModule;
}();
exports.ShopModule = ShopModule;

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(10);
var router_1 = __webpack_require__(77);
var shop_component_1 = __webpack_require__(756);
var routes = [{
    path: '',
    component: shop_component_1.ShopComponent
}];
var ShopRoutingModule = /** @class */function () {
    function ShopRoutingModule() {}
    ShopRoutingModule = __decorate([core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })], ShopRoutingModule);
    return ShopRoutingModule;
}();
exports.ShopRoutingModule = ShopRoutingModule;
exports.routedComponents = [shop_component_1.ShopComponent];

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = __webpack_require__(100);
var core_1 = __webpack_require__(10);
var ShopComponent = /** @class */function () {
    function ShopComponent(userService) {
        this.userName = userService.userName;
    }
    ShopComponent.prototype.ngOnInit = function () {};
    ShopComponent = __decorate([core_1.Component({
        selector: 'shop',
        template: __webpack_require__(757),
        styles: [__webpack_require__(758)]
    }), __metadata("design:paramtypes", [user_service_1.UserService])], ShopComponent);
    return ShopComponent;
}();
exports.ShopComponent = ShopComponent;

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to my Shop!</h1>"

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = ""

/***/ })

});
//# sourceMappingURL=0.chunk.js.map