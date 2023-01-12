const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

const isCoffeeMakerReady = true;

//* node.js style, use module.exports to export module
// module.exports = {coffeeStock, isCoffeeMakerReady};

//* ES6 style, use export to export module
// export default coffeeStock;

export {coffeeStock, isCoffeeMakerReady};

// console.log(module);
// output:
/*
Module {
    id: '.',
    path: '/run/host/var/home/bagashiz/Documents/Projects/JavaScript/Learn-JS/06_Modules',
    exports: {
    coffeeStock: { arabica: 100, robusta: 150, liberica: 200 },
    isCoffeeMakerReady: true
    },
    filename: '/run/host/var/home/bagashiz/Documents/Projects/JavaScript/Learn-JS/06_Modules/state.js',
    loaded: false,
    children: [],
    paths: [
        '/run/host/var/home/bagashiz/Documents/Projects/JavaScript/Learn-JS/06_Modules/node_modules',
        '/run/host/var/home/bagashiz/Documents/Projects/JavaScript/Learn-JS/node_modules',
        '/run/host/var/home/bagashiz/Documents/Projects/JavaScript/node_modules',
        '/run/host/var/home/bagashiz/Documents/Projects/node_modules',
        '/run/host/var/home/bagashiz/Documents/node_modules',
        '/run/host/var/home/bagashiz/node_modules',
        '/run/host/var/home/node_modules',
        '/run/host/var/node_modules',
        '/run/host/node_modules',
        '/run/node_modules',
        '/node_modules'
    ]
*/