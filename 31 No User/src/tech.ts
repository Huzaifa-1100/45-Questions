// lets make an array and  make sure the list of users is not empty
let userName: string[] = ["Eric", "Admin", "jack", "Robert", "William"];

// condition 1 If the list is empty, print the message We need to find some users!
userName.forEach((userName) => {
  if (userName.length === 0) {
    console.log(`We need to find some users!`);
  } else {
    console.log(`Hello ${userName}, thank you for logging in again.`);
  }
});

// Condition 2 Remove all of the usernames from your array,
userName = []

// make sure the correct message is printed.
    if (userName.length === 0) {
      console.log(`\nWe need to find some users!`); // the correct message is print as mentioned in the condition 1
  } else {
    console.log(`Hello ${userName}, thank you for logging in again.`);
  }


//   No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

