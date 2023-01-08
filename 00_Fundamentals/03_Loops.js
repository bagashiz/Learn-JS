//* For Loop 
for (let i = 0; i < 5; i++) {
    process.stdout.write(i + " "); // 0 1 2 3 4
}

//* For of Loop
let myArray = ["Foo", "Bar", "Foobar"];

for (const arrayItem of myArray) {
    console.log(arrayItem) // Foo \n Bar \n Foobar
}

// While Loop
let i = 1;

while (i <= 100) {
    console.log(i); // 1 - 100
    i++;
}

// Do-While Loop
let j = 1;

do {
    console.log(j); // 1 - 100
    j++;
} while (j <= 100);