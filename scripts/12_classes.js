"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person_12 = /** @class */ (function () {
    function Person_12(name) {
        this.name = name;
        console.log(this.name + " Constructor");
    }
    Person_12.staticMethod = function () {
        console.log("Static method");
    };
    Person_12.prototype.greet = function () {
        console.log("Hello " + this.name);
    };
    return Person_12;
}());
;
var p_12 = new Person_12("Leonhard");
Person_12.staticMethod();
p_12.greet();
var Employee_12 = /** @class */ (function (_super) {
    __extends(Employee_12, _super);
    function Employee_12(name) {
        return _super.call(this, name) || this;
    }
    Employee_12.prototype.greet = function () {
        console.log("Greet employee " + this.name);
    };
    return Employee_12;
}(Person_12));
var e_12 = new Employee_12("Employee Leo");
Employee_12.staticMethod();
e_12.greet();
//# sourceMappingURL=12_classes.js.map