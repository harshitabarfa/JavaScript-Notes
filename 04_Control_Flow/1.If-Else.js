// if statement : It is used to specify a block of code to be executed, if a specified condition is true.

// Syntax:
// if (condition) {
//  block of code to be executed if the condition is true
// }

// Example:
// let age = 19;
// if (age >= 18) {
//   console.log("Adult");
// }

// else statement : It is used to specify a block of code to be executed if the condition is false.

// Syntax:
// if (condition) {
//  block of code to be executed if the condition is true
// } else {
//  block of code to be executed if the condition is false
// }

// Example:
// let age = 17;
// if (age >= 18) {
//   console.log("You can Vote!");
// }
// else{
//     console.log("You can not vote!")
// }

// else-if Statement : It is Used to specify a new condition if the first condition is false.

// Syntax:
// if (condition1) {
//  block of code to be executed if condition1 is true
// } else if (condition2) {
//  block of code to be executed if the condition1 is false and condition2 is true
// } else {
//  block of code to be executed if the condition1 is false and condition2 is false
// }

// Example:
let age = 18;
if (age > 0 && age <= 17) {
  //   console.log("You are a kid!");
} else if (age >= 18) {
  //   console.log("You are not a kid!");
} else {
  //   console.log("Invalid age!");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) { // Ek bhi condition false hogi to code execute nahi hoga.
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // Ek bhi condition true hogi toh code execeute ho jayega.
  console.log("User logged in");
}
