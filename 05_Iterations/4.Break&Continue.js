// Break : Break keyword is used to come out of a loop only for that iteration/loop.
// The break statement "jumps out" of a loop.

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log("Detected 5");
//     break;
//   }
//   console.log(`Value of i is ${index}`);
// }

// Continue: Continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
// The continue statement "jumps over" one iteration in the loop.

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
      console.log("Detected 5");
      continue;
    }
    console.log(`Value of i is ${index}`);
  }
  