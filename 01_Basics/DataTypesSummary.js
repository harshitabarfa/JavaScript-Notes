// Two types of data types :

// 1. Primitive data types : (7 Types)
// Number, String, Boolean, BigInt, Null, Undefined, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n


// 2. Non-Primitive data types (Reference type) :
// Arrays, Objects, Functions

const heros = ["Vanshika", "Raksha", "Naman"];

let myObj = {
    name: "harshita",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);