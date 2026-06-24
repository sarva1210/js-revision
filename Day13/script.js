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