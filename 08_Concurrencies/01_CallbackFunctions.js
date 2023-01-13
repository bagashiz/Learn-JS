//* callback function
//? A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
//? The callback function is executed after the outer function has finished.

// when to use callback function
const orderCoffee = () => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
    }, 3000);
    return coffee;
}

const coffee = orderCoffee();
console.log(coffee);
// Output:
/*
Sedang membuat kopi, silakan tunggu...
null
*/
// The output is null because the orderCoffee() function is executed before the setTimeout() function.

// using callback function
const orderCoffee2 = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}

orderCoffee2(coffee => {
    console.log(coffee);
});
// Output:
/*
Sedang membuat kopi, silakan tunggu...
Kopi sudah jadi!
*/

//* callback hell
//? Callback hell is a situation where you have a nested series of functions that depend on the return value of the previous function.
//? This problem is often caused by excessive use of callbacks.
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients, function (ingredients) {
        makeTheDough(ingredients, function (dough) {
            pourDough(dough, function (pouredDough) {
                bakeACake(pouredDough, function (cake) {
                    console.log(cake);
                })
            })
        })
    });
}
// The above code is an example of callback hell.