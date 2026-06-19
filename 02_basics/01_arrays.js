const myArr1 = [0 , 1 , 2 , 3 , 4 , 5];
const Heroes = ["Superman", "Batman", "Spiderman"];

const myArr2 = new Array(0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9);
console.log(myArr2);

// Some Array methods

myArr1.push(6); // adds an element to the end of the array
myArr1.pop(); // removes the last element of the array
myArr1.unshift(0); // adds an element to the beginning of the array
myArr1.shift(); // removes the first element of the array
console.log(myArr1);

myArr2.slice(0, 4); // removes elements from index 0 to index 4 (not inclusive)
console.log(myArr2);

myArr2.splice(1, 4); // removes 4 elements starting from index 1
console.log(myArr2);

const myArr3 = new Array(myArr1.concat(myArr2)); // concatenates two arrays
console.log(myArr3);
