// Making array
let magicians: string[] = ["Criss Angel", "David Blaine", "Teller"];

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}
show_magicians(magicians);