
// REST PARAMETERS
let displayColorsRest = function (...colors) {
    for (let i in colors) {
        console.log(colors[i]);
    }
}

let colorArray = ["Yellow", "Indigo", "Magento"];

// SPREAD/SPLIT OPERATOR
console.log(displayColorsRest(...colorArray));