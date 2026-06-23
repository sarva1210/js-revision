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