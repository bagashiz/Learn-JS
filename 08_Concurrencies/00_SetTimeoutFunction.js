//* asynchronous function is a function that runs in the background, without stopping the execution of the code.

//* setTimeout() function
//? setTimeout() function is used to execute a function after a specified time.
//? The setTimeout() function takes two parameters:
//? 1. The function to be executed
//? 2. The time, in milliseconds (1000 milliseconds = 1 second), the function should be executed after (optional)
//? The setTimeout() method returns a unique ID which can be used to cancel the execution of the function using the clearTimeout() method.

console.log("Selamat datang!");
setTimeout(() => {
    console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000); // 3000 ms = 3 seconds
console.log("Ada yang bisa dibantu?");
// Output:
/*
Selamat datang!
Ada yang bisa dibantu?
Terima kasih sudah mampir, silakan datang kembali!
*/
