// Conditional (Ternary) Operator : It assigns a value to a variable based on a condition.

// Syntax:
// (condition) ? true output : false output

// Example:
let age = 17;
age >= 18 ? console.log("Adult") : console.log("Not Adult");

// Nullish Coalescing Operator (??) : The ?? operator returns the first argument if it is not nullish (null or undefined)Otherwise it returns the second argument.

// Syntax:
// variable ?? default_value;

// Example:
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;

// console.log(val1);
