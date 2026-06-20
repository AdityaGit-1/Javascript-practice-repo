const tinderUser = new Object(); //creating an empty object using constructor method

tinderUser.id = "123abc";
tinderUser.name = "Aditya";
tinderUser.isLoggedIn = false;

console.log(tinderUser); 

const regularUser = {
    email: "someone@gmail.com",
    fullname: {                  // nested object
        userfullname: {
            firstname: "Aditya",
            lastname: "Tiwari"
        }
    }
}

console.log(regularUser.fullname.userfullname); //accessing the nested object using dot notation
console.log(regularUser["fullname"]["userfullname"]); //accessing the nested object using bracket notation

const obj1 = {1: "one", 2: "two"};
const obj2 = {3: "three", 4: "four"};

const obj3 = Object.assign({}, obj1, obj2); //merging two objects using Object.assign() method
console.log(obj3);

const obj5 = {...obj1, ...obj2}; //merging two objects using spread operator
console.log(obj5);

const users = [
    {         //array of objects
        id: 1,
        email: "adi@gmail.com",
        password: "123456",
        username: "adiitya123",
    },
    {
        id: 2,
        email: "tiwari@gmail.com",
        password: "abcdef",
        username: "tiwari123",
    }
]
console.log(users[1].email); //accessing the email property of the second object in the array using dot notation

console.log(Object.keys(tinderUser)); //getting the keys of the object using Object.keys() method
console.log(Object.values(tinderUser)); //getting the values of the object using Object.values() method
console.log(Object.entries(tinderUser)); //getting the key-value pairs of the object using Object.entries() method in a form of array of arrays