// Numbers in js

const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); 
// toString() method se data type string ho jayega or usme fir ham string ki properties bhi laga sakte hai.

// console.log(balance.toFixed(1));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// Maths in js

// console.log(Math);
// console.log(Math.abs(-4)); // Absolute(abs): Negative value positive me change ho jati hai.
// console.log(Math.round(4.5)); // .5 se niche 4 output dega or .5 se upar 5 output dega.
// console.log(Math.ceil(4.2)); // Top vala number dega.
// console.log(Math.floor(4.9)); // Floor hamesha lowest value dega.
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // Hamesha 0 or 1 ke bich me random value ayegi.
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
// Define kar diya hai ki hame value 10 or 20 ke bich me chaiye.

console.log(Math.floor(Math.random() * (max - min + 1)) + min)