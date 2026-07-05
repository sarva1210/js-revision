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