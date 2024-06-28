// for of : Loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

// Syntax
// for (const iterator of object) {
// code block to be executed
// }

// Examples:

// let myArray = [1, 2, 3, 4, 5];
// for (const num of myArray) {
//   console.log(num);
// }

const greetings = "Hello World!";
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`)
}

// Maps : A Map holds key-value pairs where the keys can be any datatype.

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ":-", value);
}

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map( (num) => { return num + 10})
// console.log(newNums);

const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 20);

console.log(newNums);
