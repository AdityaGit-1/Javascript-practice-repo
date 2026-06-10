console.log(2 > 1);
console.log(2 < 1);
console.log(2 != 1);
console.log(2 == 1);

/* Comparison can be between different data types
but result may not be predictable 
(JS may convert a string to number for conversion)
Hence comparison must be done b/w same data types
*/
// EXAMPLE 

console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);

// === strict check (checks datatype and the values both)

console.log("2" === 2); //Output - false (equal values but different data types)
console.log(2 === 2); //Output - true (both values and datatype are equal)