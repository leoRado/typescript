"use strict";
// REST PARAMETERS
var displayColorsRest = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var i_1 in colors) {
        console.log(colors[i_1]);
    }
};
var colorArray = ["Yellow", "Indigo", "Magento"];
// SPREAD/SPLIT OPERATOR
console.log(displayColorsRest.apply(void 0, colorArray));
//# sourceMappingURL=6_spread_operator.js.map