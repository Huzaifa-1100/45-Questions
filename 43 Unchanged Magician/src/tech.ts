// Questiokn No 43

// Start with your work from Exercise 42
let magicians: string[] = ["Criss Angel", "David Blaine", "Teller"];

function copyArray(array:string []){
  return [...array]
}

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++){
    magicians[i] = magicians[i] + " the great"
  }
  };


function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}



const copyMagicianArry = copyArray(magicians)
make_great(copyMagicianArry);

console.log(`\nThis is my orriginal array:`);
show_magicians(magicians);
console.log(`\nThis is my modified copy of the array:`);
show_magicians(copyMagicianArry);