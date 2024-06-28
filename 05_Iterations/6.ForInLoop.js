// for-in loop : Loops through the properties of an Object.

// Syntax:
// for (const key in object) {
//         const element = object[key];
// }

// Example:

const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple",
  };
  
  for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
  }
  
  const programming = ["js", "rb", "py", "java", "cpp"];
  
  for (const key in programming) {
    console.log(programming[key]);
  }
  