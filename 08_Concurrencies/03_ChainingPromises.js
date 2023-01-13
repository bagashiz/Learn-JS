//* Chaining Promises
//? The then() method can be chained to execute multiple asynchronous operations one after another.
//? It returns a Promise object, so we can call then() again to handle the next Promise.

const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}

// checkAvailability returns a Promise object that represents the availability of the coffee machine
const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};

// checkStock returns a Promise object that represents the stock of coffee beans and water
const checkStock2 = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};

// brewCoffee returns a Promise object that represents the coffee brewing process
const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 2000);
    });
};

// makeEspresso is a function that represents the process of making an espresso
// it uses the Promise chaining technique to execute the asynchronous operations one after another
function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock2();
        })
        .then((value) => {
            console.log(value)
            return brewCoffee();
        })
        .then(value => {
            console.log(value);
            state.isCoffeeMachineBusy = false;
        })
        .catch(rejectedReason => {
            console.log(rejectedReason);
            state.isCoffeeMachineBusy = false;
        });
}

makeEspresso();
// Output:
/*
Mesin kopi siap digunakan.
Stok cukup. Bisa membuat kopi.
Membuatkan kopi Anda...
Kopi sudah siap!
*/