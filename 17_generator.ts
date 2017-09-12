function *createGenerator() {
    yield 1;
    console.log("After 1st yield");
    yield 2;
    console.log("After 2nd yield");
};

let myGenerator = createGenerator();

console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());