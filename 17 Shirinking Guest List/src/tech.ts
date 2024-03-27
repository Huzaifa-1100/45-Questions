// Exercise 17
// Initial Guest list from Excercise 16
let guests: string[] = [
  "Zara",
  "Yaman",
  "Maliha",
  "Arwa",
  "Khuzaima",
  "Fatima",
];

// Announcement only two peoples can be invited for dinner
console.log(
  `Dear ${guests}, unfortunately, new dinner table won't arrive in time, so we can only invite two people for diiner.`
);

// Removing guests
while (guests.length > 2) {
    let removedGuest =
    guests.pop();
    console.log(`Sorry, ${removedGuest} I cannot invite you to dinner`);
}

// Print Message for remaining guests
guests.forEach(guests => {
    console.log(`Dear, ${guests} Your are still invited to the dinner.`);
})

// Removing last two names
guests.splice(0, guests.length);

// Print empty guest list 
console.log(`Final guests list` + guests)
