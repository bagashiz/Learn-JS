//* Map
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap); // Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }

// set and get
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size); // 3
console.log(capital.get("London")); // England
capital.set("New Delhi", "India"); // ["New Delhi", "India"]
console.log(capital.size); // 4
console.log(capital.get("New Delhi")); // India

//! NOT best practice
const wrongMap = new Map();
wrongMap["My Key"] = "My Value";

console.log(wrongMap.has("My Key")); // false
console.log(wrongMap.delete("My Key")); // false

//* Set
const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet); // Set(3) { 1, 4, 6 }

// add and delete
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

numberSet.delete(4);

console.log(numberSet); // Set(4) { 1, 6, 5, 10 }