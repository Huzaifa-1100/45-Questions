
// Tests for equality and inequality with strings
let apple: string = "Red"
console.log(`Is apple equal to red? I predict true.`);
console.log(apple == "Red");

let country: string = "Pakistan"
console.log(`\nIs country inequal to Pakistan? I predict false.`);
console.log(country != "Pakistan");

// Tests using the lower case function
let child: string = "Yaman"
console.log(`\nIs the lowercase of child equal to yaman? I predict true.`);
console.log(child.toLowerCase() == "yaman");

console.log(`\nIs the lowercase of child not equal to yaman? I predict false.`)

// NUMERICAL TEST: 
// Lets make some variables
let six = 6;
let three = 3;
let four = 2;
let ten = 15


// Involving equality and inequality
console.log(`\nIs six equal to 6? I predict true.`);
console.log(six == 6);

console.log(`\nIs three is not equal to 3? I predict false.`);
console.log(three != 3);

// Involving greater than and less than
console.log(`\nIs six greater than three? I predict true.`);
console.log(six > three);

console.log(`\nIs six less than 3? I predict false.`);
console.log(six < 3);

// Involving greater than or equal to
console.log(`\nIs four greater than or equal to 2? I predict true.`);
console.log(four >= 2);

console.log(`\nIs three grater than or equal to six? I predict false.`);
console.log(three >= six);

// Involving less than or equal to
console.log(`\nIs ten less than or equal to 15? I predict true.`);
console.log(ten <= 15);

console.log(`\nIs ten less than or equal to four? I predict false`);
console.log(ten <= four);

// Tests using "and" and "or" operators
let five =5
// Test using and 
console.log(`\nIs five equal to 5 and Is five greater than 4? I predict true.`);
console.log(five == 5 && five > 4);

console.log(`\nIs five not equal to 5 and Is five smaller than 4? I predict false`);
console.log(five !=5 && five < 4);
// Test using or
console.log(`\nIs five not equal to 5 OR Is five equal to 5? I predict true`);
console.log(five != 5 || five == 5);

console.log(`\nIs five not equal to 5 OR Is five greater than 5? I predict false`);
console.log(five != 5 || five > 5);

// Test whether an item is in a array
let vegitables: string[] =["Potato", "Onion", "Carrot", "Tomato"];
console.log(`\nIs Carrot in the vegitables array? I predict true.`);
console.log(vegitables.includes("Carrot"));

console.log(`\nIs ladyfinger in the vegitaples array? I preedict false.`);
console.log(vegitables.includes("ladyfinger"));

// Test whether an item is not in a array
let fruits: string[] =["Mango", "Orange", "Banan", "Watermelon"];
console.log(`\nIs Papaya not in the fruits array? I predict true.`);
console.log(!fruits.includes("Papaya"));

console.log(`\nIs Mangor not in the fruits array? I preedict false.`);
console.log(!fruits.includes("Mango"));

