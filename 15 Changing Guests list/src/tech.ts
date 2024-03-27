// guests list from exercise 14

// Adding guest names
let guests: string[] =['Yaman','Arwa','Ali',];

// Print invitation to each person
guests.forEach(guests => {
    console.log(`Dear ${guests}, You are coordially invited to dinner at my place.`);
});
// start exercise 15
// guest who cant make it to dinner
let undableToAddend: string = "Ali";
console.log(`${undableToAddend} is not able to attend the dinner\n`);

// Replace the guest
let newGuest: string = "Khuzaima"
guests[guests.indexOf(undableToAddend)] = newGuest

// New invitation
guests.forEach(guests => {
    console.log(`Dear ${guests}, You are coordially invited to dinner at my place.`);
});