//Day 2 of 100 days of coding challenge
//Question 1: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var author = "William Shakespeare";
var quote = "My Words Fly Up, My Thoughts Remain Below. Words Without Thoughts Never To Heaven Go.";
console.log("".concat(author, " once said,\"").concat(quote, "\""));
//Question 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Albert Einstein ";
var quotes = " A person who never made a mistake never tried anything new.";
var message = "".concat(famous_person, "once said,").concat(quotes);
console.log(message);
// Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//With whitespaces
var personName = "\n\t Uzma Abid \t\n";
console.log(personName);
//Without whitespaces
var newName = personName.trim();
console.log(newName);
