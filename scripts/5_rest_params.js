"use strict";
var displayColors = function () {
    console.log(arguments.length);
    for (var i_1 in arguments) {
        console.log(arguments[i_1]);
    }
};
console.log(displayColors('Red'));
console.log(displayColors('Red', 'Green'));
console.log(displayColors('Red', 'Green', 'Blue'));
// REST PARAMETERS
var displayColorsRest = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    console.log(arguments.length);
    for (var i_2 in colors) {
        console.log(colors[i_2]);
    }
};
console.log(displayColorsRest('Red'));
console.log(displayColorsRest('Red', 'Green'));
console.log(displayColorsRest('Red', 'Green', 'Blue'));
//# sourceMappingURL=5_rest_params.js.map