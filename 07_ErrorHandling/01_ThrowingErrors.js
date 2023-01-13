//* Throwing Errors
//? Throwing an error is a way to indicate that something unexpected happened and the normal flow of execution cannot continue.
//? To throw an error, use the throw keyword followed by the error object.
//? The error object can be created using the Error constructor.
//? The Error constructor takes a string argument that is the error message.
//? The error object has 3 properties: name, message, stack

let json = '{ "age": 20 }';

try {
    let user = JSON.parse(json);

    // if the user.name is empty
    if (!user.name) {
        // throw a syntax error with a message
        throw new SyntaxError("'name' is required.");
    }

    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}
// output: JSON Error: 'name' is required.

//* undefined error
let json2 = '{ "name": "Yoda", "age": 20 }';

try {
    let user2 = JSON.parse(json2);

    if (!user2.name) {
        throw new SyntaxError("'name' is required.");
    }

    errorCode;

    console.log(user2.name); // Yoda
    console.log(user2.age);  // 20
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}
// output: JSON Error: errorCode is not defined

//* use if statement and instanceof to handle different errors
try {
    // ...
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(`Reference Error: ${error.message}`);
    } else {
        console.log(error.stack);
    }
}