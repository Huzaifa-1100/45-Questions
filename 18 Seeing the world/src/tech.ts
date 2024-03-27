// places of the world I'd like to visit
let places: string[] = ["Mecca", "Turkey", "White House", "Beijing", "Paris"];

// Print orginal array
console.log(`Array in Original Order: ` + places);

// alphabetical order without modifying the actual list.
console.log(`\n Alphabetical order: `, [...places].sort());

// Print original array
console.log(`\n Original Order: ` + places);

// Pring array in reverse alphabetical order without changing the order of the original list
console.log(`\n Reverse Alphabetic Order: `, [...places].sort().reverse());

// Print array to show it still in its original order
console.log(`\n Array in Original Order: ` + places);

// Reverse the order of the places
places.reverse();

// Print the array to show that its order has changed
console.log(`\n Revers Order: ` + places);

// Reverse the order of the list again to get back to original order
places.reverse();

// // Print the array to show it's back to its original order
console.log(`\nOriginal Order: ` + places);

// The array stored in alphabetical order
places.sort();

// Print the array to show that its order has been changed.
console.log(`\nStored in alphabetical Order: ` + places);

// Sort the array in reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));


// The array show that its order has been changed
console.log(`\nSorted in Reverse Alphabetical Order: ` + places);
