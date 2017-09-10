let displayColors = function () {
    console.log(arguments.length);
    for (let i in arguments) {
        console.log(arguments[i]);
    }
}

console.log(displayColors('Red'));
console.log(displayColors('Red', 'Green'));
console.log(displayColors('Red', 'Green', 'Blue'));

// REST PARAMETERS
let displayColorsRest = function (...colors) {
    console.log(arguments.length);
    for (let i in colors) {
        console.log(colors[i]);
    }
}

console.log(displayColorsRest('Red'));
console.log(displayColorsRest('Red', 'Green'));
console.log(displayColorsRest('Red', 'Green', 'Blue'));