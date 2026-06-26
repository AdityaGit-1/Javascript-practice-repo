//Immediately Invoked Function Expression

(function db_1(){
    console.log(`DB CONNECTED`);
})();

// first parenthesis is for writing function expression , second one is to call the function wrapping the function inside it  "  ()()   "
// it is used to remove the global scope pollution 

((name) => {
    console.log(`DB CONNECTED TWO`);
} )('Aditya');

//  semicolon(;) should be used to end the function expression when writing two IIFEs.