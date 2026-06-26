// js questions

// Create a user object that stores name and email and has a login method which prints “User logged in”.
const user ={
    name: "John Doe",
    email: "johndoe@gmail.com",
    login: function(){
        console.log("User Logged In")
    }
}
user.login()


// Imagine you now have 5 users. First, think how you would manage them without using a class. Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches
class userr {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log(`${this.name} Logged In`)
    }
}

const user1 = new userr("John Doe", "johndoe@gmail.com");
const user2 = new userr("Jane Smith", "janesmith@gmail.com");
const user3 = new userr("Bob Johnson", "bobjohnson@gmail.com");
const user4 = new userr("Alice Williams", "alicewilliams@gmail.com");
const user5 = new userr("Charlie Brown", "charliebrown@gmail.com");

user1.login();
user2.login();
user3.login();
user4.login();
user5.login();


// Create a product object that stores name and price and has a method which returns the final price after discount. 
const product = {
  name: "Laptop",
  price: 80000,
  discount: 20,
  finalPrice: function () {
    return this.price - (this.price * this.discount / 200);
  }
};

console.log(product.finalPrice());


// Create a Car class with the following: brand speed a drive method that prints the car brand and speed .
class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  drive() {
    console.log(`${this.brand} is driving at ${this.speed} km/h`);
  }
}

// Create two different car objects from the same class and verify that their data is different. 
const car1 = new Car("BMW", 200);
const car2 = new Car("Audi", 180);

car1.drive();
car2.drive();


// Create a Student class whose constructor accepts name and roll number. Add a method introduce that prints both values.
class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}, Roll No: ${this.roll}`);
  }
}

const s1 = new Student("Ram", 25);
s1.introduce();


// Create an object with two methods: One method using a normal function One method using an arrow function Inside both, print this and observe the difference.
const obj = {
  name: "John",
  
  normalFunc: function () {
    console.log("Normal:", this);
  },

  arrowFunc: () => {
    console.log("Arrow:", this);
  }
};

obj.normalFunc();
obj.arrowFunc();


// Create a User constructor function (do not use class syntax). 
function User8(name) {
  this.name = name;
  this.login = function () {
    console.log(`${this.name} logged in`);
  }
}


// Add a login method in two ways: First, inside the constructor Then, move the method to the prototype 
function User9(name) {
  this.name = name;
}

User9.prototype.login = function () {
  console.log(`${this.name} logged in`);
};

const uA = new User9("Alex");
const uB = new User9("Bob");

uA.login();
uB.login();

// compare login methods of both users and verify that they are the same function.
console.log(uA.login === uB.login); // true

 
// Create an object that contains a name property. Use call to run the function using the object Use apply to run the function using the object Use bind to create a new function and then call it .
const person = {
    name: "Alice"
};

function printName() {
    console.log(`Name: ${this.name}`);
}

printName.call(person);
printName.apply(person);
const newFunc = printName.bind(person);
newFunc();


// Borrow a method from one object and run it for another object using call.
const obj1 = {
  name: "Alice",
  greet: function () {
    console.log(`Hello ${this.name}`);
  }
};

const obj2 = {
  name: "Tom"
};

obj1.greet.call(obj2); 