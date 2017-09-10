var obj = {
    id: 10,
    greet: function () {
        setTimeout(function (){console.log("NonArrow => id:" + this.id);});
    },
    greet_arrow: function () {
        setTimeout(() => {console.log("Arrow => id:" + this.id);});
    }
}

obj.greet();
obj.greet_arrow();