"use strict";
// Great Magicians: Start with a copy of your program from Exercise 41
// Making array
let magicians = ["Criss Angel", "David Blaine", "Teller"];
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
;
// call functions
make_great(magicians);
show_magicians(magicians);
