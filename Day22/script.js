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


// Classes and Objects (Reinforcement)

// 4. Create a class named Employee that stores: name salary Add a method showDetails that prints name and salary. 
// 5. Create three employee objects from the same class and verify that modifying one employee does not affect the others.
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  showDetails() {
    console.log(this.name, this.salary);
  }
}

const emp1 = new Employee("josh", 20000);
const emp2 = new Employee("sam", 30000);
const emp3 = new Employee("mike", 40000);
emp1.salary = 25000;
emp1.showDetails();
emp2.showDetails();
emp3.showDetails();


// Constructor and Initialization 

// 7. Create a class named BankAccount. Its constructor should accept accountHolderName and balance. 8. Inside the constructor, store both values using this. 9. Add a method deposit(amount) that increases the balance. 10. Create two bank accounts and deposit money into only one.
class BankAccount {
  constructor(accountHolderName, balance) {
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
}

const acc1 = new BankAccount("Sammy", 1000);
const acc2 = new BankAccount("Shane", 2000);
acc1.deposit(500);
console.log(acc1.balance); 
console.log(acc2.balance); 