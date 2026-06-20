const course = {
    courseName: "JavaScript",
    coursePrice: "999",
    courseInstructor: "John Doe",
    courseDuration: "4 weeks",
    courseLevel: "Beginner",
    courseDescription: "Learn JavaScript from scratch and build interactive web applications.",
}

const {courseInstructor : instructor} = course; // Destructuring the courseInstructor property and renaming it to instructor

console.log(instructor); 

// {   // treated as JSON 
//     "name": "Aditya",
//     "coursename": "JavaScript",
//     "courseprice": "free"

// } 


/* could also be written inside of an array of objects like this
[
       {}
       {}
       {}
]
*/