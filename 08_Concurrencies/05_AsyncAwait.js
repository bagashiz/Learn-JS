//* Async Await syntax
//? Async Await is a new syntax for writing asynchronous code in a synchronous way.
//? It is built on top of the Promise object.

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


// use async keyword to define an asynchronous function so it executes asynchronously
// use await keyword to wait for the Promise object to be fulfilled before executing the next line of code
async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}

makeEspresso();
// Output:
/*
Memeriksa ketersediaan mesin...
Memeriksa stok bahan...
Memanaskan air...
Menggiling biji kopi...
Membuatkan kopi Anda...
Kopi sudah siap!
*/