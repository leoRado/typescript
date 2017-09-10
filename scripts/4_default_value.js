"use strict";
var percentage = 0.1;
var percentage_function = function () { return 0.1; };
var sallary = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = 5; }
    console.log(arguments.length);
    return value + bonus;
};
var sallary_value = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * percentage; }
    return value + bonus;
};
var sallary_function = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * percentage_function(); }
    return value + bonus;
};
console.log(sallary());
console.log(sallary(20));
console.log(sallary(20, 30));
console.log(sallary(undefined, 30));
//# sourceMappingURL=4_default_value.js.map