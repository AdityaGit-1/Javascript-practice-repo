//+++++++++++++++ Nums ++++++++++++++++



const score = 400
const balance = new Number(100) //explicitly creating a Number object
console.log(score, balance); // 400 [Number: 100]

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num1 = 100.1234
console.log(num1.toPrecision(4)); // 100.1

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


//++++++++++++ Maths +++++++++++++++++++++++

console.log(Math.abs(-100)); // 100
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.1)); // 5

console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.max(1, 2, 3, 4, 5)); // 5

console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10); // random number between 0 and 10
console.log(Math.floor(Math.random() * 10)); // random integer between 0 and 9

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random integer between 10 and 20
