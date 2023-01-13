//* Custom Errors

//? Custom errors are created by extending the built-in Error class.
//? The name of the error class should end with "Error".
//? The constructor of the custom error class should call the parent constructor and pass the error message.

// custom error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

let json = '{ "age": 30 }';

try {
    let user = JSON.parse(json);

    if (!user.name) {
        throw new ValidationError("'name' is required.");
    }
    if (!user.age) {
        throw new ValidationError("'age' is required.");
    }

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
        // catch the custom error
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
// output: Invalid data: 'name' is required.