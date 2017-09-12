let mySet = new Set();

mySet.add("Hello");
mySet.add(55);
mySet.add(12);

console.log(mySet.size);
console.log(mySet.has(12));
mySet.delete(12);
console.log(mySet.has(12));

console.log("Does set has key");
let keyNormal = {};
mySet.add(keyNormal);
console.log("Before null set: " + mySet.has(keyNormal));
keyNormal = null;
console.log("After null set: " + mySet.has(keyNormal));

let myWeakSet = new WeakSet();
let key = {};
myWeakSet.add(key);
console.log("Has weak set key?");
console.log("Before null set: " + myWeakSet.has(key));
key = null;
console.log("After null set: " + myWeakSet.has(key));