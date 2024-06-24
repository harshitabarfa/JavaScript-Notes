// Array : Storing a collection of multiple items under a single variable name.

// Array declare karne ke tarike
let myArray = ["Harshita", 6, true, 2005, 8];
const myArray1 = new Array(1, 2, 3, 4)
console.log(myArray)


// Array methods:
// console.log(myArray[1]); // Accessing the array values.

// console.log(myArray.length) // Finding the array length.

// console.log(myArray.toString()) // Converts an array to a string of comma separated values.

let newArray = myArray.concat(myArray1) // Used to join arrays to the given array.
// console.log(newArray)

myArray.push(6) // Add a new element at the end of the array.
// console.log(myArray)

myArray.pop() // Remove last element from the array.
// console.log(myArray)

myArray.unshift("Shraddha") // Add a new element at the start of the array.
// console.log(myArray)

myArray.shift() //Remove first element from the array.
// console.log(myArray)

// console.log(myArray.includes(9)); // Array ke andar 9 include hai ya nahi check karega.

// console.log(myArray.indexOf(2005)); // Value ka index batayega or agar voh value array me nahi hogi to -1 output dega.

const newArray1 = myArray.join(" - ") // Joins all the array elements using a separator.
// console.log( newArray1);

myArray.reverse(); // Reverse the array elemets.
// console.log(myArray)

myArray.sort();
// console.log(myArray) // Modifies the original array.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits)
// let newArray2 = fruits.slice(1); // Slice out a part of an array starting from array element 1 ("Orange").
// let newArray2 = fruits.slice(1,4); // It selects array elements from the start argument, and up to (but not included) the end argument.
// console.log(newArray2)

let newArray2 = fruits.splice(1,4, "Potato", "Tomato") // 1 represent the position to add, 4 represent the no. of elements to remove, "Potato" and "Tomato" represent the elements to be added.
console.log(newArray2)
console.log(fruits)