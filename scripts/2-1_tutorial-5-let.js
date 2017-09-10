"use strict";
for (var i = 1; i <= 5; i++) {
    setTimeout(function () { console.log("hello var: " + i); }, 1000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () { console.log("hello let: " + i_1); }, 1000);
};
for (var i_1 = 1; i_1 <= 5; i_1++) {
    _loop_1(i_1);
}
//# sourceMappingURL=2-1_tutorial-5-let.js.map