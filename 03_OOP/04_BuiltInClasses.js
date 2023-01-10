//* Built-In Class Examples

// Date
const date = new Date();

const timeInJakarta = date.toLocaleString('id-ID', {
    timeZone: 'Asia/Jakarta',
});

const timeInTokyo = date.toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
});

const timeInMakassar = date.toLocaleString('id-ID', {
    timeZone: 'Asia/Makassar',
});

console.log(timeInJakarta);  // (today's date), 10:10:10 AM
console.log(timeInTokyo);    // (today's date), 10:10:10 AM
console.log(timeInMakassar); // (today's date), 10:10:10 AM

// Array
const myArray = new Array('a', 'b', 'c', 'a', 'b', 'c');
console.log(myArray); // ['a', 'b', 'c', 'a', 'b', 'c']