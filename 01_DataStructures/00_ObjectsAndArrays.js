//* Object
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine",
};

// access using dot operators
console.log(`My name is ${user.firstName} ${user.lastName}`);
console.log(`I am ${user.age} years old`);
// or brackets
console.log(`I am from ${user["home world"]}`);

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

// change property value
spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);

//! spaceship = { name: "New Millenium Falcon" }; (TypeError: Assignment to constant variable.)

console.log(spaceship);

delete spaceship.manufacturer; // "manufacturer" property deleted

console.log(spaceship);

//* Array
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];

console.log(myArray); // [ 'Cokelat', 42.5, 22, true, 'Programming' ]

// accessing element in array
console.log(myArray[1]); // 42.5
console.log(myArray[5]); // Undefined, out of the length of array

// add element to array
myArray.push('Javascript');
console.log(myArray); // [ 'Cokelat', 42.5, 22, true, 'Programming', 'Javascript' ]

// delete last element of array
myArray.pop(); // 'Javascript'
myArray.pop(); // 'Programming'
console.log(myArray); // [ 'Cokelat', 42.5, 22, true ]

// add element to the first index of an array
myArray.unshift("Apple");
console.log(myArray); // [ 'Apple', 'Cokelat', 42.5, 22, true ]

// remove first index of element in array
myArray.shift();
console.log(myArray); // [ 'Cokelat', 42.5, 22, true ]

// remove an element in a specific index of an array
delete myArray[1];
console.log(myArray); // [ 'Cokelat', <1 empty item>, 22, true ]

// use splice to remove the element and the space
myArray.splice(1, 2); // remove 2 elements starting from index 1
console.log(myArray); // [ 'Cokelat', true ]

//* Spread Operator
const favs = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(favs); // [ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
console.log(...favs); // Seafood Salad Nugget Soup
// same as console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

const others = ["Cake", "Pie", "Donut"];
const allFavorites = [favs, others];
console.log(allFavorites);
/*
[
    [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
    [ 'Cake', 'Pie', 'Donut' ]
]
*/

const allFavorites2 = [...favs, ...others];
console.log(allFavorites2);
/*
[
    'Seafood', 'Salad',
    'Nugget',  'Soup',
    'Cake',    'Pie',
    'Donut'
]
*/

const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };
const newObj = { ...obj1, ...obj2 };
console.log(newObj); // { firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }

//* Destructuring Object
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

// manual
/*
const firstName = profile.firstName
const lastName = profile.lastName
const age = profile.age
*/

const { firstName, lastName, age } = profile
console.log(firstName, lastName, age) // John Doe 18

// destructuring assignment
let originalFirstName = "Foo";
let originalAge = 24;
({ originalFirstName, originalAge } = profile); // need to use ()
console.log(originalFirstName, originalAge);

// assigning to different local variables
const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
console.log(localFirstName, localLastName);

//* Destructuring Array
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// destructure the 3rd index
const [, , thirdFood] = favorites;
console.log(thirdFood);

// destructuring assignment
let myFood = "Ice Cream";
let herFood = "Noodles";
[myFood, herFood] = favorites;
console.log(myFood, herFood); // Seafood Salad

// swap variables value with array destructuring
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b); // 2 1