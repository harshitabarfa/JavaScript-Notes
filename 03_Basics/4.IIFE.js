// Immediately Invoked Function Expressions (IIFE) : GLobal scope ke pollution se jo problem hoti hai kahi bar us polluton ko hatane ke liye IIFE ka use karte hai.

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
  })();
  
  ((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
  })("Harshita");
  
