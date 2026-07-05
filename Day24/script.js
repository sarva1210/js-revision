// call Method Practice
// call is a method that allows you to invoke a function with a specific this value and arguments provided individually.

// 19. Create a function showBrand that prints this.brand. 
// 20. Create two different objects with brand values. 
// 21. Use call to execute showBrand for both objects
function showBrand() {
  console.log(this.brand);
}

const a = { brand: "Samsung" };
const d = { brand: "Apple" };

showBrand.call(a);
showBrand.call(d);


// apply Method Practice
// apply is a method that allows you to invoke a func with a specific this value and arguments provided as an array (or an array like obj).

// 23. Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name. 
// 24. Create an object with a name property. 
// 25. Use apply to call introduce using the object and an array of arguments
function introduce(city, role) {
  console.log(this.name, city, role);
}

const person = { name: "Josh" };

introduce.apply(person, ["Banglore", "Developer"]);