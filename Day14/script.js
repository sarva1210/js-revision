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