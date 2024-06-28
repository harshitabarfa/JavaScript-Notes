// Truthy -> Value that resolve to true in boolean context.

// Truthy values:

// '0' (a string containing a single zero)
// 'false' (a string containing the text “false”)
// [] (an empty array)
// {} (an empty object)
// " "
// function(){} (an “empty” function)
// Everything that is not FALSY

// Falsy -> Value that resolve to false in boolean context.

// Falsy values:

// false
// 0 (zero)
// -0 (minus zero)
// 0n (BigInt zero)
// '', "", `` (empty string)
// null
// undefined
// NaN

// Array ko check karne ka tarika.
// let array = [];
// if (array.length === 0) {
//     console.log("Array is empty");
// }

// Object ko check karne ka tarika.
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}