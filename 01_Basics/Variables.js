// Variable : A Variable is a container that store a data value.

const accountId = 1234; // A block scope variable
let accountEmail = "harshitabarfa3@gmail.com"; // A block scope variable
var accountPassward = "9101"; // A global scope variable
let accountState; // Undefined value

// Ye tarika bilkul accha nahi hai variable decalre karne ka but dhyan rakhna hai ki is tarike se bhi variable declare kiye jate hai.
accountCity = "Jaipur";

// accountId = 5678; // Const variable can not re-declared and updated.
// accountEmail = "harshii06@gmail.com" // Let variable can not be re-declared but can be updated. 
// accountPassward = "1213" // Var variable can be re-declared and updated.
// accountCity = "Indore"

console.log(accountId)
console.log(accountEmail)
console.log(accountPassward)
console.log(accountCity)

// Is tarike se ham tabular form me values print karva sakte hai.
console.table([accountId, accountEmail, accountPassward, accountCity, accountState])
