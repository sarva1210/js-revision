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


// Calls a function with a specific `this` value.
// The `call()` method allows you to invoke a function and explicitly set the value of `this` within that function. 
// It takes the first argument as the value to be used as `this`, followed by any additional arguments that the function may require.
function hello() {
  console.log(`Hello ${this.name}`);
}
hello.call({ name: "John" });