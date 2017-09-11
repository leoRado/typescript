export function greet (message) {
    console.log(message);
};

export class GreetMessage {
    constructor (message) {
        this.message = message;
    }

    greet () {
        console.log(this.message);
    }
};