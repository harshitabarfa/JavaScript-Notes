// Conversion : To convert the value of one data type to another data type.

let score = "33";
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber)

// "33" => 33
// "33abc" => NaN (Not a number)
// true => 1, false => 0
// null => 0
// undefined => NaN

let isLoggedIn = true;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)

// 1 => true, 0 => false
// "" => false
// "harshita" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber)
// console.log(typeof stringNumber)

// Operations in js :

let value = 3;
let negValue = -value;
// console.log(negValue);

let str1 = "Hello"
let str2 = " Harshita"
let str3 = str1 + str2
// console.log(str3)

// Complex situations 

console.log(1 + "2")
console.log("1" + 2)
console.log("1" + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

let gameCounter = 100;
// gameCounter++; // Postfix : Returns the value before incrementing.
++gameCounter; // Prefix : Returns the value after incrementing.

// console.log(gameCounter)