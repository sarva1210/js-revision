// OOPS Thinking with Objects

// 1. Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”. 
// 2. Add one more method to the same object that increases the price by 10 percent.
const laptop = {
  brand: "Samsung",
  price: 67000,
  start: function () {
    console.log("Laptop started");
  }
};
laptop.start();

laptop.increasePrice = function () {
  this.price = this.price + (this.price * 10) / 100;
};
console.log(laptop.price);
laptop.increasePrice();
console.log(laptop.price);