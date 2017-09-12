let myMap = new Map();

myMap.set("fname", "Leonhard");
myMap.set("age", 25);

console.log("Get fname");
console.log(myMap.get("fname"));
console.log("Has fname?");
console.log(myMap.has("fname"));

let obj1 = {};

myMap.set(obj1, "Object 1");
console.log("Get Obj1");
console.log(myMap.get(obj1));

myMap.delete("fname");

// => !!! size is NOT A FUNCTION !!! <= //
console.log(`Map size before clearing: ${myMap.size}`);

myMap.clear();

console.log(`Map size after clearing: ${myMap.size}`);

let myAdvancedMap = new Map([
    ["fname", "Leonhard"],
    ["age", 25]
]);

myAdvancedMap.set("lname", "Radonic");

console.log("My advanced map's size");
console.log(myAdvancedMap.size);

// These are not working: Map::entries(), Map::keys(), Map::values.
console.log(`Whole entry as key value pair`);
for (let [key, value] of myAdvancedMap.entries()) {
    console.log(`${key} -> ${value}`);
}

console.log(`Whole entry as array`);
for (let entry of myAdvancedMap.entries()) {
    console.log(`${entry[0]} -> ${entry[1]}`);
}

console.log(`All map keys`);
for (let key of myAdvancedMap.keys()) {
    console.log(`${key}`);
}

console.log(`All map values`);
for (let value of myAdvancedMap.values()) {
    console.log(`${value}`);
}
// ======================================================================//

let foreachMap = new Map([
    ["fname", "Leonhard"],
    ["lname", "Radonic"],
    ["age", 25]
]);

function iterationFunction (value, key, map) {
    console.log(`${key} -> ${value}`);
    console.log("Is my map this map?");
    console.log(map === foreachMap);
};

foreachMap.forEach(iterationFunction);
