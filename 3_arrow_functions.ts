
const foo_1 = () => {
    return "Hello world!";
};

const foo_2 = () => "Hello world!";
const foo_3 = a => "Hello " + a;
const foo_4 = (a, b) => a+b;

console.log(foo_1());
console.log(foo_2());
console.log(foo_3("Leo"));
console.log("a+b=" + foo_4(2,2));