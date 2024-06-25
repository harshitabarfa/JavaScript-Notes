// Scopes : Scope determines the accessibility (visibility) of variables.

var c = 300; // Global Scope
if (true) {
  let a = 10; // Local scope
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "Harshita";

  function two() {
    const website = "youtube";
    console.log(userName);
  }
  // console.log(website);
  two();
}
// one();

if (true) {
  const userName = "Harshita";
  if (userName === "Harshita") {
    const website = " youtube";
    // console.log(userName + website);
  }
  // console.log(website);
}
// console.log(userName);

function addOne(num) {
  return num + 1;
}
console.log(addOne(5));

const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5));