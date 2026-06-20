// Functions are reusable blocks of code that perform a specific task. They can take inputs, called parameters, and can return a value. Functions help to organize code and make it more modular and easier to maintain.

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Calling the function
console.log(greet("Alice")); // Output: Hello, Alice!

// Function expression
function addTwoNumbers(num1 , num2){
    return num1 + num2;
}

console.log(addTwoNumbers(5, 10)); // Output: 15

//Another Example
function loginUserMessage(username){
    if(username === undefined){
        console.log("Please provide a username to log in.");
        return
    }
    return `${username} just logged in!!`
}

console.log(loginUserMessage("Aditya")); // Output: Aditya just logged in!!


