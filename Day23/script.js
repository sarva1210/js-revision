// questions

// 11. Create an object named profile with a property username and a method printName that logs this.username. 
// 12. Call the method normally and observe the output.
const profile = {
  username: "Sarva",
  printName() {
    console.log(this.username);
  }
};
profile.printName(); 
const fn = profile.printName;
fn(); // undefined