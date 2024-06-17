"use strict"; // Treat all js code as newer version.

// Data types : Define the type of data a variable can hold.

// Primitive data types:

let a = "Harshita"; // String data type
let b = 18; // Number data type
let c = false; // Boolean data type
let d = undefined; // Undefined data type
let e = null; // Null data type
let f = Symbol("I am a nice symbol"); // Symbol data type
let g = BigInt("567") + BigInt("3"); // BigInt data type

// console.table([a, b, c, d, e, f, g]);

// console.log(typeof null); // Object type
// console.log(typeof undefined); // Undefined type

// Non-primitive data types:

// Objects:
const item ={
    "Name": "Harshita",
    "Mobile no.": 9752632166,
    "Marks": 87,
}
console.log(item)
console.log(item["Name"]);
