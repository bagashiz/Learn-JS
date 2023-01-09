//* Function
function greeting() {
    console.log("Hello World");
}

// call the function
greeting(); // prints "Hello World"

// parameters
function greeting(name, language) {
    switch (language) {
        case "English":
            console.log("Hello " + name);
            break;
        case "French":
            console.log("Bonjour " + name);
            break;
        case "Japanese":
            console.log("Konnichiwa " + name);
        default:
            break;
    }
}

// call the function
greeting("John", "English"); // prints "Hello John"
greeting("John", "French"); // prints "Bonjour John"
greeting("John", "Japanese"); // prints "Konnichiwa John"

// return
function multiply(a, b) {
    return a * b;
}

// store the result of the function
let result = multiply(2, 3);
console.log(result); // 6

//* Anonymous Function / Function Expression
const greets = function (name, language) {
    switch (language) {
        case "English":
            return "Hello " + name;
            break;
        case "French":
            return "Bonjour " + name;
            break;
        case "Japanese":
            return "Konnichiwa " + name;
        default:
            break;
    }
}

// call the function
console.log(greets("John", "English")); // prints "Hello John"

//* Destructuring Function Parameters
const user = {
    id: 24,
    displayName: "kren",
    fullName: "Kylo Ren",
};

function introduce({ displayName, fullName }) {
    console.log(`${displayName} is ${fullName}`);
}

//* Default Parameters
function exponentsFormula(base, exponent = 2) {
    let result = base ** exponent;
    console.log(`${base}^${exponent} = ${result}`);
}

exponentsFormula(3); // 3^2 = 9

//* Rest Parameters
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5)); // 15

//* Arrow Functions
const sayName = (name) => {
    console.log(`My name is ${name}`);
}

sayName("John"); // "My name is John"

// without parameters
const sayHello = () => {
    console.log("Hello World");
}

sayHello(); // "Hello World"

const subtract = (a, b) => a - b;

console.log(subtract(2, 3)); // -1