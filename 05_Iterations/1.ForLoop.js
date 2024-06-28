// for loop : The for statement creates a loop with 3 optional expressions:

// Synatx:

// for (expression 1; expression 2; expression 3) {
//   code block to be executed
// }

// Expression 1 is executed (one time) before the execution of the code block.

// Expression 2 defines the condition for executing the code block.

// Expression 3 is executed (every time) after the code block has been executed.

// Example:

// Print numbers 0 to 10:
for (let i = 0; i <= 10; i++) {
    // console.log(i);
  }
  // console.log(i); // i is not accessible outside.
  
  // For loop with if condition:
  for (let j = 0; j <= 10; j++) {
    if (j == 5) {
      // console.log("5 is best number");
    }
    // console.log(j);
  }
  
  // loop inside loop:
  for (let k = 1; k <= 10; k++) {
    //   console.log(`Outer loop value: ${k}`);
    for (let m = 1; m <= 10; m++) {
      // console.log(`Inner loop value ${m} and inner loop ${k}`);
      // console.log(k + "*" + m + " = " + k * m);
    }
  }
  
  let myArray = ["Harshita", "Mayuri", "Vanshika"];
  // console.log(myArray.length);
  for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
  //   console.log(element);
  }
  