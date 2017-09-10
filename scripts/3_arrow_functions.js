"use strict";
var foo_1 = function () {
    return "Hello world!";
};
var foo_2 = function () { return "Hello world!"; };
var foo_3 = function (a) { return "Hello " + a; };
var foo_4 = function (a, b) { return a + b; };
console.log(foo_1());
console.log(foo_2());
console.log(foo_3("Leo"));
console.log("a+b=" + foo_4(2, 2));
//# sourceMappingURL=3_arrow_functions.js.map