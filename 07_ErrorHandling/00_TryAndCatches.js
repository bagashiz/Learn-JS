//* Try and Catch

try {
    // Code that might throw an error
} catch (error) {
    // Code to handle the error
}

// code without error
try {
    console.log('This is a message');
} catch (error) {
    console.log('This is an error message');
}
// output: This is a message

// code with error
try {
    console.log('This is a message');
    console.log(a); // a is not defined
    console.log('This is 2nd message');
} catch (error) {
    console.log('This is an error message');
}
// output: This is a message This is an error message
// The code after the error is not executed

// error object
// error object has 3 properties: name, message, stack
try {
    console.log('This is a message');
    console.log(a); // a is not defined
    console.log('This is 2nd message');
} catch (error) {
    console.log('This is an error message');
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
// output:
/* 
This is a message
This is an error message
ReferenceError
a is not defined
ReferenceError: a is not defined
    at file:///run/host/var/home/bagashiz/Documents/Projects/JavaScript/Learn-JS/07_ErrorHandling/TryAndCatches.js:32:17
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)
*/

// try catch and finally
// finally block is executed regardless of the result

// code without error
try {
    console.log('This is a message');
} catch (error) {
    console.log('This is an error message');
} finally {
    console.log('This is finally block');
}
// output: This is a message This is finally block

// code with error
try {
    console.log('This is a message');
    console.log(a); // a is not defined
    console.log('This is 2nd message');
} catch (error) {
    console.log('This is an error message');
} finally {
    console.log('This is finally block');
}
// output: This is a message This is an error message This is finally block