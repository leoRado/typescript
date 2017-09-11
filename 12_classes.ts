
class Person_12 {
    constructor (name) {
        this.name = name;
        console.log(`${this.name} Constructor`);
    }
    static staticMethod() {
        console.log("Static method");
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
};

let p_12 = new Person_12("Leonhard");
Person_12.staticMethod();
p_12.greet();

class Employee_12 extends Person_12 {
    constructor(name) {
        super(name);
        console.log("Employee constructor for " + this.name);
    }
    greet() {
        console.log("Greet employee " + this.name);
    }
}

let e_12 = new Employee_12("Employee Leo");
Employee_12.staticMethod();
e_12.greet();