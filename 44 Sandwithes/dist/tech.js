"use strict";
// Question No. 44
function sandwitch(item) {
    console.log(`\nPlease select you favourite sandwitch:`);
    for (let i = 0; i < item.length; i++) {
        console.log(`* ${item[i]}`);
    }
}
console.log(`Enjoy your sandwitch`);
sandwitch(["Grilled Cheze", "Club Sandwitch", "Reuben Sandwitch"]);
sandwitch(["Veggie Sandwitch", "Egg Sandwitch", "Bread Sandwitch"]);
sandwitch(["Chicken Sandwithc", "Beef Sandwitch", "Cucumber Sandwich"]);
