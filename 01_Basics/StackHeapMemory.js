// Stack : Variable declare karte hai vha se ek copy milta hai. (Original value change nahi hoti)
let myName = "Harshita"

let myNickName = myName;
console.log(myNickName)

// Heap : Reference milta hai original value ka. (Jo bhi change karenge original value me change hoga)
let userOne = {
    email : "harshitabarfa3@gmail.com",
    upi : "user@abl"
}

let userTwo = userOne

userTwo.email = "harshii06@gamil.com"
console.log(userOne.email)
console.log(userTwo.email)