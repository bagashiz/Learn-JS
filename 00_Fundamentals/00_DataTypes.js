// Variable Declaration
let firstName = "Foo";

let lastName;
lastName = "Bar";

let fullName = firstName + " " + lastName;

console.log(fullName); // Foo Bar

const x = 100
console.log(x) // 100

//! x = 200 (TypeError: Assignment to constant variable)

// Data Types
//* Undefined
let a;
console.log(typeof (a)); // Undefined

//* Number
let num = 69;
console.log(typeof (num)); // number
let dec = 4.20;
console.log(typeof (dec)); // number

console.log(num + dec) // 73.2
console.log(num - dec) // 64.8
console.log(num * dec) // 289.8
console.log(num / dec) // 16.428571428571427
console.log(num % dec) // 1.7999999999999972

console.log(num++) // 69
// num = 70
console.log(++num) // 71
// num = 71

//* BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(typeof (bigNumber)); // bigint

console.log(bigNumber); // 1234567890123456789012345678901234567890n
console.log(myInt); //  1.2345678901234568e+39

//* String
let hello = "world"; // can use '' too
console.log(typeof (hello)); // string
console.log(hello); // world

//! const answer = '"I think it's awesome!" he answered confidently'; (SyntaxError: Unexpected identifier)
const answer = '"I think it\'s awesome!" he answered confidently';
console.log(answer); // "I think it's awesome!" he answered confidently

// concatenation
let greet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet); // HelloHello

// interpolation
const myName = "Foo";
console.log(`Hello, my name is ${myName}.`); // Hello, my name is Foo.

//* Boolean
let i = true;
let j = false;

console.log(typeof (i)) // boolean
console.log(i) // true
console.log(typeof (j)) // boolean
console.log(j) // false

let isGreater = i > j;
let isLess = i < j;

console.log(isGreater); // false
console.log(isLess); // true

//* Null
let nullData = null;

console.log(nullData); // null
console.log(typeof (nullData)); // object

//* Symbol
const id = Symbol("id");
console.log(id); // Symbol(id)
console.log(typeof (id)); // symbol

const id1 = Symbol("id");
const id2 = Symbol("id");

