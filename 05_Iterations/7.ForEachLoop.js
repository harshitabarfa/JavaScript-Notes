// for-each loop : Calls a function (a callback function) once for each array element.

// Syntax:
// array.forEach(element => {
// code block to be executed
// });

// Example:
const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];
myCoding.forEach((item) => {
  //   console.log(`Language name is ${item.languageName} and language file name is ${item.languageFileName}.`);
});

const values = coding.forEach((item) => {
//   console.log(item);
  return item; // For-each loop value return nahi karta hai.
});
// console.log(values);