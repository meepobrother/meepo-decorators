"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var deprecated_decorator_1 = require("deprecated-decorator");
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.method = function () {
        console.log('static method');
    };
    Foo = __decorate([
        deprecated_decorator_1.default('Bar', '0.1.0', 'http://meepo.com.cn/')
    ], Foo);
    return Foo;
}());
/*
    Class `Foo` has been deprecated since version 0.1.0, use `Bar` instead.
    at /Users/meepo/Desktop/meepo-decorators/bld/001.js:21:11
    Check out http://vane.life/ for more information.
    Class `Foo` has been deprecated since version 0.1.0, use `Bar` instead.
        at /Users/meepo/Desktop/meepo-decorators/bld/001.js:22:5
    Check out http://vane.life/ for more information.
    static method
*/
var foo = new Foo();
Foo.method();
//# sourceMappingURL=001.js.map