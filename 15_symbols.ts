let _15_s1 = new Symbol();
let _15_s2 = new Symbol("my_key");

console.log(`Type of _15_s1 symbol`);
console.log(typeof _15_s1);

console.log(`String of _15_s1 symbol`);
console.log(_15_s1.toString());

console.log(`Type of _15_s2 symbol`);
console.log(typeof _15_s2);

console.log(`String of _15_s2 symbol`);
console.log(_15_s2.toString());

console.log(`Are _15_s1 and _15_s2 equal?`)
console.log(_15_s1 === _15_s2);

let _15_s3 = Symbol.for("registered_symbol");
let _15_s4 = Symbol.for("registered_symbol");

console.log(`Are _15_s3 and _15_s4 equal? => They are created with Symbol::for on same key`);
console.log(_15_s3 === _15_s4);

let _15_s5 = new Symbol("test_same_key");
let _15_s6 = new Symbol("test_same_key");

console.log(`Are _15_s5 and _15_s6 equal? => They are created with Symbol::new on same key`);

let _15_fname = new Symbol();
let _15_person = {
    [_15_fname]: "Leonhard"
};

console.log(Object.getOwnPropertyNames(_15_person));
console.log(Object.getOwnPropertySymbols(_15_person)); // => new in ES2015