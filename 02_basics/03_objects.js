//if declared as literal object , it won't be singleton as we can create multiple objects using the same literal object

//object literals

const mySymbol = Symbol("key1")

const JsUser = {
    name: "Aditya",
    "surname": "Tiwari",
    age: 21,
    location: "Bengaluru",
    email: "aditya@example.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Friday"],
    [mySymbol]: "myKey1" //symbol as key
};

console.log (JsUser.name);
console.log (JsUser["surname"]); //using bracket notation to access the property of object
console.log (JsUser["email"]);
console.log (JsUser[mySymbol]);

JsUser.email = "aditya@gmail.com"; //updating the value of email property
console.log (JsUser.email);
Object.freeze(JsUser); //freezing the object to make it immutable
JsUser["email"] = "aditiwari@gmail.com"; //updating the value of email property using bracket notation (though won't be updated as object is frozen)
console.log (JsUser);

JsUser.greeting = function(){
    console.log("Helllo JS USER");
}

console.log(JsUser.greeting()); //calling the method of object but output will be undefined as we have frozen the object and can't add new properties to it