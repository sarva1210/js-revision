// Class Expression
// js allows you to define a class using a class expression. A class expression can be named or unnamed. Here's an example of both:

// Anonymous Class Expression
const Person = class {
  constructor(name) {
    this.name = name;
  }
};

const p = new Person("Josh");
console.log(p.name);


// Named Class Expression
const Car = class CarClass {
  constructor(model) {
    this.model = model;
  }
};

const c = new Car("BMW");
console.log(c.model);


// Hoisting in Classes
// class declarations are not hoisted like function declarations. 
// This means that you cannot use a class before it is defined in the code. If you try to do so, you'll get a ReferenceError.

// const obj = new Student();  // ReferenceError
// class Student {
//   constructor() {}
// }

// Inheritance (`extends`)

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak();
d.bark();


// Constructor Functions (Before ES6)
function Animal1() {
  this.name = "cat";
}
new Animal1();


// Adding Methods Using Prototype
function Animal2(name) {
  this.name = name;
}

Animal2.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};

const cat = new Animal2("Kitty");
cat.speak();


// Getter & Setter
// Getters and setters are special methods that allow you to define how to access and modify the properties of an object. 
// They provide a way to encapsulate the internal representation of an object and control how its properties are accessed or modified.
class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    this._name = value;
  }
}

const u = new User("Josh");
console.log(u.name);
u.name = "heyy!!";
console.log(u.name);