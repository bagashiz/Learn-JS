//* Imperative code
// Imperative code is a code that describes how to do something
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for (let i = 0; i < names.length; i++) {
    newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark); // [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

//* Declarative code
// Declarative code is a code that describes what to do
const names2 = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark2 = names2.map((name) => `${name}!`);

console.log(newNamesWithExcMark2); // [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]