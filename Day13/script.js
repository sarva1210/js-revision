// `this` refers to the current object depending on how the function is called.
// the value of `this` is determined by the context in which a function is invoked, not where it is defined.
// Example: Basic `this`
const obj = {
  name: "Sarva",
  show() {
    console.log(this.name);
  }
};
obj.show();


// `call()`
// Calls a function with a specific `this` value.
// The `call()` method allows you to invoke a function and explicitly set the value of `this` within that function. 
// It takes the first argument as the value to be used as `this`, followed by any additional arguments that the function may require.
function hello() {
  console.log(`Hello ${this.name}`);
}
hello.call({ name: "John" });


// `apply()` 
// Same as `call()`, but arguments are passed as an array.
// apply() is similar to call(), but it takes an array of arguments instead of a comma-separated list.
function sum(a, b) {
  console.log(this.name, a + b);
}
sum.apply({ name: "Total:" }, [10, 20]);


// `bind()`
// Returns a new function with fixed `this`.
// The bind() method creates a new function that, when called, has its this keyword set to the provided value.
// It allows you to create a new function with a specific context for this, which can be useful in scenarios where you want to ensure that a function is always called with a particular this value.
function welcome() {
  console.log("Welcome", this.user);
}
const newFn = welcome.bind({ user: "Sarva" });
newFn()