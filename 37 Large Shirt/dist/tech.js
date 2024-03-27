"use strict";
// Write a funciokn
function makeShirt(size = "large", message = "I love typescript") {
    console.log(`You choose ${size} shirt and "${message}" printed on it.\n`);
}
makeShirt();
makeShirt("Extra Large");
makeShirt("Medium");
makeShirt("Small");
