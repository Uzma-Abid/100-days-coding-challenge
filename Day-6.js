//Day 7 of 100 days coding challenge
//Question 1 : Shrinking guest list : You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making a guest list
var guest = ["Shahreyar", "Zubia", "Ammar", "Aman"];
//A guest cannot attend the dinner
var unableToAttend = "Ammar";
console.log("".concat(unableToAttend, " can't  able to attend today's dinner?"));
//Replace a guest(who is not attending)
var newGuest = "Shariq";
guest[guest.indexOf(unableToAttend)] = newGuest;
//print the invitation
guest.forEach(function (inviteGuest) {
    console.log("Greeting ".concat(inviteGuest, ", would you like to join me for dinner today?"));
});
//finding a bigger table
console.log("Hey happy to inform you I found a bigger dinner table.");
//Adding a guest in the beginning of index
guest.unshift("Abid");
//Adding a guest in the end of index
guest.push("Nimra");
//Adding a guest in the middle of index
var middleGuest = Math.floor(guest.length / 2);
guest.splice(middleGuest, 0, "Mehwish");
//Print a new invitations
guest.forEach(function (inviteGuest) {
    console.log("Hello ".concat(inviteGuest, ", inviting you to join my biggest dinner today!"));
});
//Informing that I can only invite two guests
console.log("Unfortunetly, our nee bigger dinner time will not deliver on time, i can only invite two guests at today's dinner.");
//Removing guests
while (guest.length > 2) {
    var removeGuest = guest.pop();
    console.log("Sorry, ".concat(removeGuest, " you are not invited at today's dinner."));
}
//Inviting remaining two guests
guest.forEach(function (inviteguest) {
    console.log("Hello, ".concat(inviteguest, " you are invited for today's dinner."));
});
//Empty the list
guest.pop();
guest.pop();
console.log("Empty list", guest);
//Question 2 :seeing the world : Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//Store places where I wants to visit
var placeList = ["Maldives", "South Korea", "Indonesia", "Japan", "Azerbaijan"];
console.log("Original order", placeList);
//Print my array in alphabetical order
console.log("Alphabetical orde", __spreadArray([], placeList, true).sort());
//Print my array in original order
console.log("Original order", placeList);
//Reverse my array
console.log("Reverse order", __spreadArray([], placeList, true).reverse());
//Back to original order
console.log("Back to original order", placeList);
//We have change our array's original order 
console.log("Original order changed", placeList.reverse());
//Showing that array's order has changed
console.log("change order", placeList);
//Question 3 : Dinner guest : Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestList = ["Shahreyar", "Zubia", "Ammar", "Aman"];
console.log("I am inviting ".concat(guestList.length, " guests at my dinner."));
