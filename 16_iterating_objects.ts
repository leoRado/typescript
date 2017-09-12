
let _16_person = {
    fname: "Leonhard",
    lname: "Radonic"
};

// => Should represent iterator definition for an object

// _16_person[Symbol.iterator] = function () {
//     let properties = Object.keys(_16_person);
//     let count = 0;
//     let isDone = false;

//     let next = () => {
//         if (count >= properties.length) {
//             isDone = true;
//         }
//         return {done: isDone, value: properties[count++]};
//     }

//     return {next};
// }

for(let prop of _16_person) {
    console.log(prop);
}