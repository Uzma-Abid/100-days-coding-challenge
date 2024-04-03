//day 5 of 100 days cosing challenge
//Question 1 : Guest list :If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest = ["Shaheryar", "Zubia", "Ammar", "Aman"];
guest.forEach(function (inviteGuest) {
    console.log("Greeting ".concat(inviteGuest, ", would you like to join me at dinner today?"));
});
//Question 2 : Changing guest list :You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var guestlist = ["Shaheryar", "Zubia", "Ammar", "Aman"];
guestlist.forEach(function (inviteGuest) {
    console.log("Greeting ".concat(inviteGuest, ", would you like to join me at dinner today?"));
});
//Replacing a guest who will not be able to join at dinner
var unableToJoin = "Ammar";
console.log("".concat(unableToJoin, " cannot join us for today's dinner."));
//Modify the guest list
var newGuest = "Shariq";
guestlist[guestlist.indexOf(unableToJoin)] = newGuest;
//print invitation
guestlist.forEach(function (inviteGuest) {
    console.log("Hello ".concat(inviteGuest, ", would you like to joim me at dinner today?"));
});
//Question 3 : More guests :You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestslist = ["Shaheryar", "Zubia", "Ammar", "Aman"];
guestslist.forEach(function (inviteGuests) {
    console.log("Greeting ".concat(inviteGuests, ", would you like to join me at dinner today?"));
});
//Replacing a guest who will not be able to join at dinner
var unableToAttend = "Ammar";
console.log("".concat(unableToAttend, " cannot join us for today's dinner."));
//Modify the guest list
var newGuests = "Shariq";
guestslist[guestlist.indexOf(unableToAttend)] = newGuest;
//print invitation
guestslist.forEach(function (inviteGuests) {
    console.log("Hello ".concat(inviteGuests, ", would you like to joim me at dinner today?"));
});
//Informing about bigger table
console.log("Happy to inform you I found bigger table for today's dinner!");
//Adding new guest to the beginning of the index
guestslist.unshift("Abid");
//Adding new guest to the end of the index
guestslist.push("Nimra");
//Adding new guest to the middle of the index
var middleGuest = Math.floor(guestslist.length / 2);
guestslist.splice(middleGuest, 0, "Tania");
//print our new invitation
guestslist.forEach(function (inviteGuests) {
    console.log("Greeting ".concat(inviteGuests, ", you are invited for today's dinner!"));
});
