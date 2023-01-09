//* Closures
function init() {
    var name = 'Obi Wan'; // local variable in init function scope

    // inner function, example of closure
    function greet() {
        // calling variable from parent's function
        console.log(`Hello, ${name}`);
    }

    greet();
}

init(); // prints "Hello, Obi Wan"

function init2() {
    var name = 'Obi Wan'; // local variable in init function scope

    function greet2() {
        console.log(`Hello, ${name}`);
    }

    return greet2;
}

let myFunction = init2();
myFunction(); // prints "Hello, Obi Wan"


//* Closure makes variables private
let add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    }
}

let increment = add();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3