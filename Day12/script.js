// oops in js

// Simple Object Example
const user = {
    name: "John",
    age: 18,
    greet(){
        console.log(`hello my name is ${this.name} and my age is ${this.age}`)
    }
}
user.greet();


// class = blueprint
// object = real instance created from the blueprint

// Example of class and object
class Car {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  drive() {
    console.log(`${this.brand} is driving...`);
  }
}

const car1 = new Car("BMW", 5000000);
car1.drive();