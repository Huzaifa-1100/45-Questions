// Write a funciokn
function makeShirt(size: string = "large", message: string = "I love typescript"){
  console.log(`You choose ${size} shirt and "${message}" printed on it.\n`);
}
makeShirt();
makeShirt("Extra Large");
makeShirt("Medium");
makeShirt("Small");