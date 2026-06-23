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


// A constructor is a special method inside a class that initializes object properties.
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const stud1 = new Student("John", 18);


// Every function in JavaScript has a prototype, which is used to share methods across all objects created from that function.

// Example Without Classes
function Person(name) {
  this.name = name;
}
// Adding method using prototype

Person.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

const person1 = new Person("John");
person1.sayHi();