const accountId = 144553
let accountEmail = "random@gmail.com"
var accountPassword = "456"
accountCity = "Bhonsor"

// accountId = 2 {Not Allowed}

accountEmail = "change@gmail.com"
accountPassword = "765"
accountCity = "Pune"

console.log(accountId);
console.table([accountId , accountEmail , accountPassword , accountCity]);

/* Avoid using 'var' for variables 
 to avoid block scope and functional scope issue
*/
