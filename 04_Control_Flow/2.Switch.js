// Switch : It is used to select one of many code blocks to be executed.

// Syntax:
// switch (expression) {
//   case x:
//     code block;
//     break;
//   case y:
//     code block;
//     break;
//   default:
//     code block;
// }

// This is how it works:

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

// Example:
const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("Invalid!");
    break;
}