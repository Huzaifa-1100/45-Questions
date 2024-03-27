// Make a list of five or more usernames called current_users
let current_users: string[] = ["Eric", "William", "Jack", "John", "Emily"];

// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users: string[] = ["Claire", "Emily", "Diana", "Eric", "Daisy"];

new_users.forEach(newUser => {
  if (current_users.some(currentUsers => currentUsers.toLowerCase() === newUser.toLowerCase()))
  {
    console.log(`Sorry ${newUser} is already taken you need to enter a new username.`);
  } else {
    console.log(`${newUser} is available`);
  }
})