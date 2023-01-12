// add "type": "module" in package.json to use ES6 style import/export

//* node.js style, use require to import exported module
// const {coffeeStock, isCoffeeMakerReady} = require('./state');

//* ES6 style, use import to import exported module
// import stock from './state.js';
//* if use 'export default', you can use any name to import the module

import {coffeeStock as stock, isCoffeeMakerReady} from './state.js';

console.log(stock); // { arabica: 100, robusta: 150, liberica: 200 }
console.log(isCoffeeMakerReady); // true

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

const makeCoffee = (type, miligrams) => {
    if (stock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}

displayStock(stock); // arabica, robusta, liberica
makeCoffee("robusta", 80);  // Kopi berhasil dibuat!