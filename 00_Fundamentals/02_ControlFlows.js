//* If Else
const isTrue = true;

if (isTrue) {
    console.log("it's true") // prints
} else {
    console.log("it's false")
}

let x = 50;

if (x > 70) {
    console.log(x);
} else {
    console.log(x + " is less than 70");
}

//* Switch
let language = "French";
let greeting = null;

switch (language) {
    case "English":
        greeting = "Good Morning!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    default:
        greeting = "Selamat Pagi!";
}

