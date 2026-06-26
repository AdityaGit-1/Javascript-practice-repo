if(true){        // everything inside "if" is block scope , rest is global scope
   let a = 10
   const b = 20
   var c = 30   // this var will set value of c as global . Hence we should not use "var" to declare variables.
}

console.log(a);
console.log(b);
console.log(c);

// -----------Nested Scope------------

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(usernmae);
    }

    //  console.log(website);  This will give error as website is the part of the local scope of function two()

    two()
}

one()



