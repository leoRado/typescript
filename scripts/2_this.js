"use strict";
var obj = {
    id: 10,
    greet: function () {
        setTimeout(function () { console.log("NonArrow => id:" + this.id); });
    },
    greet_arrow: function () {
        var _this = this;
        setTimeout(function () { console.log("Arrow => id:" + _this.id); });
    }
};
obj.greet();
obj.greet_arrow();
//# sourceMappingURL=2_this.js.map