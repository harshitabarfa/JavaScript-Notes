const user = {
    userName: "Harshita",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to the website.`);
        console.log(this);
    },
};
// user.welcomeMessage();
// user.userName = "Mayuri";
// user.welcomeMessage();
// console.log(this);

function chai() {
    let userName = "Harshita";
    //   console.log(this.userName);
}
// chai();

// const chai = function () {
//   let username = "hitesh";
//   console.log(this.username);
// };
// chai();

const coffee = () => {
    let userName = "Harshita";
    //   console.log(this);
};
// coffee();

// Arrow function:
const addTwoNum = (num1, num2) => {
    return num1 + num2;
};
// console.log(addTwoNum(3,4));

// Implicit return:
// const addTwo = (num1, num2) =>  num1 + num2;
// const addTwo = (num1, num2) => ( num1 + num2 );
// console.log(addTwo(3,4));

const add = (num1, num2) => ({ userName: "Harshita" });
// console.log(add(3,4));
