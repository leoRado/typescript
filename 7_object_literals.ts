let firstname = "Leo";
let lastname = "Rado";

let person = {
    firstname,
    lastname
};

console.log(person.firstname);
console.log(person.lastname);

let createPerson = function (firstname, lastname, age) {
    return {
        firstname,
        lastname,
        isSenior () {
            return age > 60;
        }
    }
}

let p = createPerson ("Leonhard", "Radonic", 25);

console.log(p.firstname);
console.log(p.lastname);
console.log(p.isSenior());

let ln = "last name";
let person_1 = {
    "first name": "Leonhard",
    [ln]: "Radonic"
};

console.log(person_1);