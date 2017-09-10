let percentage = 0.1;

let percentage_function = () => 0.1;

let sallary = function (value = 10, bonus = 5) {
    console.log(arguments.length);
    return value + bonus;
};



let sallary_value = function (value = 10, bonus = value * percentage) {
    return value + bonus;
};

let sallary_function = function (value = 10, bonus = value * percentage_function()) {
    return value + bonus;
};


console.log(sallary());
console.log(sallary(20));
console.log(sallary(20, 30));
console.log(sallary(undefined, 30));