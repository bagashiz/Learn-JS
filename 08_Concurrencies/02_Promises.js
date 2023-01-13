//* Promise
//? A Promise is an object that represents the eventual completion or failure of an asynchronous operation.
//? A Promise is in one of these states:
//? - pending: initial state, neither fulfilled nor rejected.
//? - fulfilled: meaning that the operation was completed successfully.
//? - rejected: meaning that the operation failed.
//? A pending Promise can either be fulfilled with a value, or rejected with a reason (error).
//? When either of these options happens, the associated handlers queued up by a Promise's then method are called.
//? If the Promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is

//* constructing a promise object
const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan!");
    }
};

const makeCoffee = () => {
    return new Promise(executorFunction);
}

const coffeePromise = makeCoffee();
console.log(coffeePromise);
// Output:
/*
Promise { 'Kopi berhasil dibuat' }
*/
//? executor function has two parameters, resolve and reject.
//? resolve is a function to execute when the asynchronous operation is successful.
//? reject is a function to execute when the asynchronous operation is failed.
//? The executor function is executed immediately by the Promise implementation, passing resolve and reject functions (the executor is called before the Promise constructor even returns the created object).

//* consuming promises
const stock = {
    coffeeBeans: 250,
    water: 1000,
}

// checkStock returns a Promise object
const checkStock = () => {
    return new Promise((resolve, reject) => {
        // if the stock is enough, resolve the Promise
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
            // if the stock is not enough, reject the Promise
        } else {
            reject("Stok tidak cukup");
        }
    });
};

// handleSuccess and handleFailure are callback functions to be executed when the Promise is resolved or rejected
const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

// then() method is used to consume the Promise
// it takes two arguments, a callback function for the resolved Promise and another for the rejected Promise
checkStock().then(handleSuccess, handleFailure);

//* onRejected function
//? The onRejected function is optional.
//? The catch() method is used to handle the rejected Promise.
checkStock()
    .then(handleSuccess) // if the Promise is resolved, handleSuccess will be executed
    .catch(handleFailure); // if the Promise is rejected, handleFailure will be executed