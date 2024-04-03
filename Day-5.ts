//day 5 of 100 days cosing challenge
//Question 1 : Guest list :If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest :string[] = ["Shaheryar", "Zubia", "Ammar", "Aman"];
guest.forEach(inviteGuest => {
    console.log(`Greeting ${inviteGuest}, would you like to join me at dinner today?`)
})

//Question 2 : Changing guest list :You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

let guestlist :string[] = ["Shaheryar", "Zubia", "Ammar", "Aman"];
guestlist.forEach(inviteGuest => {
    console.log(`Greeting ${inviteGuest}, would you like to join me at dinner today?`)
})
 //Replacing a guest who will not be able to join at dinner
 let unableToJoin :string = "Ammar";
 console.log(`${unableToJoin} cannot join us for today's dinner.`)

 //Modify the guest list
 let newGuest :string = "Shariq";
 guestlist[guestlist.indexOf(unableToJoin)] = newGuest;

 //print invitation
 guestlist.forEach(inviteGuest => {
    console.log(`Hello ${inviteGuest}, would you like to joim me at dinner today?`)
 })

 //Question 3 : More guests :You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestslist :string[] = ["Shaheryar", "Zubia", "Ammar", "Aman"];
guestslist.forEach(inviteGuests => {
    console.log(`Greeting ${inviteGuests}, would you like to join me at dinner today?`)
})
 //Replacing a guest who will not be able to join at dinner
 let unableToAttend :string = "Ammar";
 console.log(`${unableToAttend} cannot join us for today's dinner.`)

 //Modify the guest list
 let newGuests :string = "Shariq";
 guestslist[guestlist.indexOf(unableToAttend)] = newGuest;

 //print invitation
 guestslist.forEach(inviteGuests => {
    console.log(`Hello ${inviteGuests}, would you like to joim me at dinner today?`)
 })

 //Informing about bigger table
 console.log("Happy to inform you I found bigger table for today's dinner!")

 //Adding new guest to the beginning of the index
 guestslist.unshift("Abid");

 //Adding new guest to the end of the index
 guestslist.push("Nimra");

 //Adding new guest to the middle of the index
 let middleGuest :number = Math.floor(guestslist.length / 2);
 guestslist.splice(middleGuest, 0, "Tania");

 //print our new invitation
 guestslist.forEach(inviteGuests => {
    console.log(`Greeting ${inviteGuests}, you are invited for today's dinner!`)
 })
