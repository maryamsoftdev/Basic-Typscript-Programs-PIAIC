let current_users: string[] = ["john", "alice", "bob", "sarah", "james"];
let new_users: string[] = ["mary", "Alice", "peter", "JAMES", "emma"];

for (let i = 0; i < new_users.length; i++) {
  let newUser = new_users[i];
  let usernameTaken = false;

  for (let j = 0; j < current_users.length; j++) {
    if (current_users[j].toLowerCase() === newUser.toLowerCase()) {
      usernameTaken = true;
      break;
    }
  }

  if (usernameTaken) {
    console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations! The username '${newUser}' is available.`);
  }
}
