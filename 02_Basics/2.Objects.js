// Object : Ek tarika hota hai jisse ki hum ek user ki details ko ek sath rakh sakte hai

// var obj1 = new Object();  
// obj1.Id = 101;  
// obj1.Name = "Harshita barfa";  
// obj1.Salary = 50000; 

// console.log(obj1)

const MySymbol = Symbol("MyKey1");
const obj = {
    Name : "Harshita",
    "Full Name" : "Harshita Barfa",
    Age : 19,
    [MySymbol] : "MyKey1",
    Email : "harshitabarfa3@gmail.com",
    Location : "Indore"
}

// console.log(obj)
// console.log(obj.Name);
// console.log(obj["Full Name"]);
// console.log(obj[MySymbol])

obj.Email = "harshita@google.com" // Values ko change karna
// console.log(obj.Email)

// Object.freeze(obj); // Value change koi na kare isliye freeze method ka use karte hai.
obj.Email = "harshita@microsoft.com"
// console.log(obj)

obj.greeting = function(){
    console.log("Hello JS user");
}
obj.greetingOne = function(){
    console.log(`Hello JS user, ${this.Name}`);
}

console.log(obj.greeting());
console.log(obj.greetingOne());