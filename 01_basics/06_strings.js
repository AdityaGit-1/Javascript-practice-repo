const name = "Aditya "
const repoCount = 5

// console.log(name + repoCount + "HII"); [doesn't look good]

console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("GrandTheftAuto")

console.log(gameName.length); // length of the string
console.log(gameName[0]); // access the first character of the string
console.log(gameName.toUpperCase()); // convert the string to uppercase
console.log(gameName.charAt(3)); // access the fourth character of the string
console.log(gameName.indexOf("Theft")); // find the index of the substring "Theft"
console.log(gameName.includes("Auto")); // check if the string includes the substring "Auto"

const newSub = gameName.substring(0, 5) // extract a substring from index 0 to 5 (exclusive)
console.log(newSub);

const newSub_1 = gameName.substring(-8, 4) // if the start index is negative, it is treated as 0
console.log(newSub_1);

const newSub_2 = gameName.slice(-8, 4) // slice method can handle negative indices, it will start from the end of the string
console.log(newSub_2);

const newSub_3 = gameName.trim(0, -8) // removes whitespace from both ends of the string
console.log(newSub_3);

const newSub_4 = gameName.replace("Auto", "ViceCity") // replaces the first occurrence of "Auto" with "ViceCity"
console.log(newSub_4);

const newSub_5 = gameName.replaceAll("A", "a") // replaces all occurrences of "A" with "a"
console.log(newSub_5);

const url = "https://www.adityatiwari.com/adititya%20tiwari"
const newUrl = url.replaceAll("%20", "-") // replaces all occurrences of "%20" with "-"
console.log(newUrl);

const newUrl_1 = url.split("/") // splits the string into an array of substrings based on the delimiter "/"
console.log(newUrl_1);