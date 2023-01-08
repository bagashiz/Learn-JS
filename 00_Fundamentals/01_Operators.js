//* Assignment Operator
let x = 10;
let y = 5;

x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;
x %= y; // x = x % y;

//* Comparison Operator
let a = 10;
let b = 12;

console.log(a < b); // true
console.log(a > b); // false

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, both equals to 10
console.log(aString === aNumber) // false, both have different data type


//* Logical Operator
// AND operator
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

// OR operator
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

// NOT operator
console.log(!(a < 15)); // !(true) -> false
