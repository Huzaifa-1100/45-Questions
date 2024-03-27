"use strict";
// Exercise 16 
// guest list from Exercise 15
let guests = ["Yaman", "Arwa", "Ali"];
let undableToAddend = "Ali";
let newGuest = "Khuzaima";
guests[guests.indexOf(undableToAddend)] = newGuest;
// Informing about the bigger dinner table
guests.forEach(guests => {
    console.log(`Dear ${guests}, Good News! I found a new bigger dinner table, so I am inviting three more peoples.`);
});
// Adding guest at the beginning of the array
guests.unshift("Zara");
// Adding guest in the middle of the array
guests.splice(guests.length / 2, 0, "Maliha");
// Adding guest at the end of array
guests.push("Fatima");
// New Invitation
guests.forEach(guests => {
    console.log(`Dear ${guests}, you are coordially invited to dinner at my place.`);
});
