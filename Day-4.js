//Day 4 of 100 days coding challenge
//Question 1 : Names ://Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var friendsName = ["Uzma", "Nimra", "Amna", "Azka"];
friendsName.forEach(function (friendName) { return console.log(friendName); });
//Question 2 : Greeting : // Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var bestfriendsName = ["Uzma", "Nimra", "Amna", "Azka"];
bestfriendsName.forEach(function (bestfriendName) { return console.log("Hello ".concat(bestfriendName, ", How was your day?")); });
//Question 3 : Your own array : // Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favoriteTransportation = ["car", "scooty", "sports bike", "helicopter"];
favoriteTransportation.forEach(function (modeOfTransportation) { return console.log("I would like to own a ".concat(modeOfTransportation, ".")); });
