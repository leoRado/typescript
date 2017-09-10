let personArray = ["Leonhard", "Radonic", "Male"];

let [fname, lname, gender] = personArray;
let [,,gender_2] = personArray; // => Fetches only 3rd parameter

console.log(fname);
console.log(lname);
console.log(gender);

let personArray_1 = ["Milka", "Miljkovic", "Female"];

// Default value for any variable if not provided
let [firstname, lastname, gender_1="Male"] = personArray_1;

console.log(firstname);
console.log(lastname);
console.log(gender_1);
