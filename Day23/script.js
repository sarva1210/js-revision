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


// Constructor Function and Prototype
// it is a function that is used to create objects and set up their properties and methods. It is called with the new keyword, which creates a new instance of the object.

// 15. Create a constructor function called Vehicle that accepts type and wheels.
// 16. Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
function Vehicle(type, wheels) {
  this.type = type;
  this.wheels = wheels;
}

this.describe = function () {
  console.log(this.type, this.wheels);
};

Vehicle.prototype.describe = function () {
  console.log(this.type, this.wheels);
};