// Memory allocation - Stack (Primitive) , Heap (Non-primitive)

let myName = "Aditya_Tiwari" // stack
let myself = myName // copy of myName is assigned to myself , changing it won't change the original value of myName 
myself = "21yr"

console.log(myName);
console.log(myself); // copy of "myself" is created at the top of the stack

let userOne = {
    email:  "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne // reference provided of userOne , so changing the value will change the value of userOne object also

userTwo.email = "aditya@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);