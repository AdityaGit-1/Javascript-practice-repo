let myDate = new Date()
console.log(myDate) // This will print the current date and time

console.log(myDate.toString()); // This will print the date in a human-readable format
console.log(myDate.toDateString()); // This will print only the date part
console.log(myDate.toTimeString()); // This will print only the time part

console.log(myDate.getFullYear()); // This will print the current year
console.log(myDate.getMonth()); // This will print the current month (0-11)
console.log(myDate.getDate()); // This will print the current day of the month (1-31)
console.log(myDate.getDay()); // This will print the current day of the week (0-6)

console.log(myDate.getHours()); // This will print the current hour (0-23)
console.log(myDate.getMinutes()); // This will print the current minutes (0-59)
console.log(myDate.getSeconds()); // This will print the current seconds (0-59) 

console.log(typeof myDate); // This will print 'object' since Date is an object in JavaScript

const createdDate = new Date (2023, 0 , 23)
console.log(createdDate.toString()); 

let myTimeStamp = Date.now()
console.log(myTimeStamp); // This will print the number of milliseconds since January 1, 1970

console.log(Math.floor(Date.now()/1000)); // This will print the number of seconds since January 1, 1970 





