//* Pure Functions
//* A pure function is a function that, given the same input, will always return the same output
//*  and does not have any observable side effect.

// Impure function
let PI = 3.14;

const hitungLuasLingkaranImpure = (jariJari) => {
    return PI * (jariJari * jariJari);
}

console.log(hitungLuasLingkaranImpure(4)); // 50.24

PI = 5; // value of PI is changed

console.log(hitungLuasLingkaranImpure(4)); // 80

// Pure function
const hitungLuasLingkaranPure = (jariJari) => {
    return 3.14 * (jariJari * jariJari);
}

console.log(hitungLuasLingkaranPure(4)); // 50.24
console.log(hitungLuasLingkaranPure(4)); // 50.24
console.log(hitungLuasLingkaranPure(8)); // 200.96
console.log(hitungLuasLingkaranPure(8)); // 200.96

//* Immutability
//* Immutability is a concept that states that data cannot be changed once created
//* If you want to change the data, you create a copy of the data with the change.

// mutable
const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser('Potter', user);

console.log(user); // { firstname: 'Harry', lastName: 'Potter' }

// immutable
const user2 = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const renameLastNameUser2 = (newLastName, user) => {
    return {
        ...user,
        lastName: newLastName,
    }
}

const user2Updated = renameLastNameUser2('Potter', user2);

console.log(
    user2, // { firstname: 'Harry', lastName: 'Protter' }
    user2Updated // { firstname: 'Harry', lastName: 'Potter' }
);

//* Recursion
//* Recursion is a function that calls itself

const countDown = start => {
    console.log(start);
    if (start > 0) countDown(start - 1);
};

countDown(10); // 10 9 8 7 6 5 4 3 2 1

//* Higher Order Function
//* A higher order function is a function that takes a function as an argument or returns a function

const hello = () => {
    console.log('Hello!')
};

const say = (someFunction) => {
    someFunction();
}

const sayHello = () => {
    return () => {
        console.log('Hello!');
    }
}

hello(); // Hello!
say(hello); // Hello!
sayHello()(); // Hello!