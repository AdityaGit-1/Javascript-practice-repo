const marvel_heroes = ["Thor", "IronMan", "Captain America"];
const dc_heroes = ["Superman", "Batman", "Flash"];

// const heroes = marvel_heroes.push(dc_heroes); // adds an array to the end of another array in form of nested array
// console.log(heroes); // Output: ["Thor", "IronMan", "Captain America", ["Superman", "Batman", "Flash"]]

const all_heroes = new Array(marvel_heroes.concat(dc_heroes)); // concatenates two arrays
console.log(all_heroes); //same output as above but without nested array: ["Thor", "IronMan", "Captain America", "Superman", "Batman", "Flash"]

const all_new_heroes = [...marvel_heroes, ...dc_heroes]; // concatenates two arrays using spread operator
console.log(all_new_heroes); // Output: ["Thor", "IronMan", "Captain America", "Superman", "Batman", "Flash"]

const myArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]; // This is not an array, this is an object with a property that is an array

const realArr = myArr.flat(Infinity); // flattens the array to a single level
console.log(realArr); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Aditya"));// Output: false , we are asking if a string is an array or not
console.log(Array.isArray(myArr)); // Output: true , we are asking if myArr is an array or not

console.log(Array.from("Aditya")); // Output: ["A", "d", "i", "t", "y", "a"] , we are converting a string to an array using Array.from() method
console.log(Array.from({name: "Aditya"})); // Output: [] , we are trying to convert an object to an array using Array.from() method but it returns an empty array because the object does not have a length property