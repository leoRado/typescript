"use strict";
var firstname = "Leo";
var lastname = "Rado";
var person = {
    firstname: firstname,
    lastname: lastname
};
console.log(person.firstname);
console.log(person.lastname);
var createPerson = function (firstname, lastname, age) {
    return {
        firstname: firstname,
        lastname: lastname,
        isSenior: function () {
            return age > 60;
        }
    };
};
var p = createPerson("Leonhard", "Radonic", 25);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.isSenior());
var ln = "last name";
var person_1 = (_a = {
        "first name": "Leonhard"
    },
    _a[ln] = "Radonic",
    _a);
console.log(person_1);
var _a;
//# sourceMappingURL=7_object_literals.js.map