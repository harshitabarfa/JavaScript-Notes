// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);

// Method to print dates
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// Specific date decalare karne ke liye synatx:

// let myCreatedDate = new Date(2024, 0, 23);
// let myCreatedDate = new Date(2024, 0, 23, 5, 3);
// let myCreatedDate = new Date("2024-01-14");
let myCreatedDate = new Date("01-14-2024");
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // MiliSeconds me value milegi
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // Seconds me value milegi