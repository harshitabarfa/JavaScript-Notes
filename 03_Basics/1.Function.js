// Functions : A JavaScript function is a block of code designed to perform a particular task.

function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("I");
  }
  
  // sayMyName();
  
  // Add to numbers:-
  function add(num1, num2) {
    return num1 + num2;
  }
  // console.log(add(2, 3));
  
  const result = add(2, 3); // Output ko ham dusre variable me store karke bhi print karva sakte hai.
  // console.log("Result :", result)
  
  function loginUserMessage(username = "Harshita") {
    // Agar koi value nahi hogi username ki toh if condition execute hogi.
    //   if (!username) {
    //     console.log("PLease Enter A Username!");
    //     return;
    //   }
    return `${username} Just Logged In`;
  }
  
  // console.log(loginUserMessage("Harshita"));
  // console.log(loginUserMessage()); // Agar koi value pass nahi karenge toh undefined print hoga.
  
  // Rest/Spread operator:
  function calculateCartPrice(val1, val2, ...num1) {
    return num1;
  }
  
  // console.log(calculateCartPrice(200, 400, 500, 2000))
  
  const user = {
    userName: "Harshita",
    coursePrice: 199,
  };
  function handleObject(anyObject) {
    console.log(
      `Username is ${anyObject.userName} and CoursePrice is ${anyObject.coursePrice}.`
    );
  }
  // handleObject(user);
  
  // Direct object bhi pass kar sakte hai.
  handleObject({
    userName: "Harshii",
    coursePrice: 399,
  });
  
  // const myNewArray = [200, 400, 100, 600];
  function returnValues(getArray) {
    return getArray[3];
  }
  
  // console.log(returnValues(myNewArray));
  console.log(returnValues([200, 400, 500, 1000])); // Direct array bhi pass kar sakte hai.  