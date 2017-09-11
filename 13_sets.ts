let mySet = new Set();

mySet.add("Hello");
mySet.add(55);
mySet.add(12);

console.log(mySet.size);
console.log(mySet.has(12));
mySet.delete(12);
console.log(mySet.has(12));