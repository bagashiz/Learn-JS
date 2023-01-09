//* Variable Scopes
// global variable
const a = 'a';
// can be accessed anywhere

function parent() {
    // local variable
    const b = 'b';
    // can be accessed anywhere in the parent function
    // but not globally

    function child() {
        // local variable
        const c = 'c';
        // can be accessed anywhere in the child function
        // but not globally or in the parent function
    }
}

//! unexpected behavior
function multiply(num) {
    total = num * num;
    return total;
}

let total = 9;
let number = multiply(20);

console.log(total); // 400