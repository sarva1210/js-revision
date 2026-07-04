// questions

// 11. Create an object named profile with a property username and a method printName that logs this.username. 
// 12. Call the method normally and observe the output.
// 13. Store the method in a separate variable and call it
// 14. Modify the code so that this works correctly again.
const profile = {
  username: "Sarva",
  printName() {
    console.log(this.username);
  }
};
profile.printName(); 
const fn = profile.printName;
fn(); // undefined

const fixed = profile.printName.bind(profile);
fixed(); 