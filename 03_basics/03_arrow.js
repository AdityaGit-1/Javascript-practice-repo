const user = {
    username: "Aditya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the website`); //this keyword is used to access current context of local scope
    }

}

user.welcomeMessage()
user.username = "Tiwari"
user.welcomeMessage()

console.log(this); //this keyword here gives empty context as output

function chai(){
    // "console.log(this);" //here this keyword gives many things as output , not just empty context.
    
    let name = "Messi"
    console.log(this.username) //here this gives undefined as output , as it only works in objects , not functions


}

chai()

const chai = () => {
    let name = "Messi"
    console.log(this.username)
}

chai()

//       () => {}      // syntax of arrow function 

const addTwo = (num1 , num2) => {
    return num1 + num2
}

console.log(addTwo(5,6));

const addTwo = (num1 , num2) => num1 + num2

// return keyword could be not used if curly brackets are not used , if used then it must be used

console.log(addTwo(5,6));

