//Day 1 of 100days coding challenge
//Question 2: Personal Message:  Store a person’s name in a variable, and print a message to them, “Hello Asharib, would you like to learn some Typescript today?”

let personName : string = "Asharib";
console.log(`Hello ${personName}, would you like to learn some typescript today?`);

//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personsName : string = "Uzma Abid";
//to lowercase
console.log("lowercase :", personsName.toLowerCase());

//to uppercase
console.log("uppercase :", personsName.toUpperCase());

//titlecase
console.log("titlecase :", personsName.replace(/\b\w/g, c=> c.toUpperCase()))