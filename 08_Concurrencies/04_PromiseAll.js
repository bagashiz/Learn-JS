//* Promise.all()
//? The Promise.all() method takes an array of Promise objects as an argument.
//? It returns a single Promise object that resolves when all of the Promise objects in the argument array have resolved.
//? If any of the Promise objects in the argument array is rejected, the single Promise object that is returned by Promise.all() immediately rejects with the reason of the rejected Promise object.
//? The Promise.all() method is useful when we want to execute multiple asynchronous operations in parallel.

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
const checkStock = () => {
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

// boilWater returns a Promise object that represents the water boiling process
const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log('Memanaskan air...');
        setTimeout(() => {
            resolve('Air panas sudah siap!');
        }, 2000);
    });
};

// grindCoffeeBeans returns a Promise object that represents the coffee beans grinding process
const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log('Menggiling biji kopi...');
        setTimeout(() => {
            resolve('Bubuk kopi sudah siap!');
        }, 1000);
    });
};

// makeEspresso is a function that represents the process of making an espresso
// it uses the Promise chaining technique to execute the asynchronous operations one after another
// the boilerWater() and grindCoffeeBeans() functions are executed in parallel using the Promise.all() method
function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value);
            const promises = [boilWater(), grindCoffeeBeans()];

            return Promise.all(promises);
        })
        .then((value) => {
            console.log(value)
            return brewCoffee();
        })
        .then((value) => {
            console.log(value);
            state.isCoffeeMachineBusy = false;
        })
        .catch((rejectedReason) => {
            console.log(rejectedReason);
            state.isCoffeeMachineBusy = false;
        });
}

makeEspresso();
// Output:
/*
Mesin kopi siap digunakan.
Stok cukup. Bisa membuat kopi.
[ 'Air panas sudah siap!', 'Bubuk kopi sudah siap!' ]
Membuatkan kopi Anda...
Kopi sudah siap!
*/