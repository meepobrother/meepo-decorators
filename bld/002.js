"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var when = require("decorator-when");
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.method = function () {
        // s.apply(this, arguments)
        console.log('method');
    };
    Demo.prototype.should = function () {
        return Math.random() > 0.5;
    };
    __decorate([
        when(Demo.prototype.should)
    ], Demo.prototype, "method", null);
    return Demo;
}());
new Demo().method();
//# sourceMappingURL=002.js.map