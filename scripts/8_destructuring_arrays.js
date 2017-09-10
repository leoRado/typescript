"use strict";
var personArray = ["Leonhard", "Radonic", "Male"];
var fname = personArray[0], lname = personArray[1], gender = personArray[2];
var gender_2 = personArray[2]; // => Fetches only 3rd parameter
console.log(fname);
console.log(lname);
console.log(gender);
var personArray_1 = ["Milka", "Miljkovic", "Female"];
// Default value for any variable if not provided
var firstname = personArray_1[0], lastname = personArray_1[1], _a = personArray_1[2], gender_1 = _a === void 0 ? "Male" : _a;
console.log(firstname);
console.log(lastname);
console.log(gender_1);
//# sourceMappingURL=8_destructuring_arrays.js.map