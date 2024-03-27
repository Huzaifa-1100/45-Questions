"use strict";
// lets make an array of five user names
let userName = ["Eric", "Admin", "jack", "Robert", "William"];
// print a greeting to each user after they log in to a website
userName.forEach((userName) => {
    if (userName === "Admin") {
        console.log(`Hello ${userName}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${userName}, thank you for logging in again.`);
    }
});
