// synchronous approach
// This code executes tasks in a sequential manner
console.log("Task 1");
console.log("Task 2");


// asynchronous approach
// This code executes tasks in a non-blocking manner
console.log("Starting asynchronous tasks...");

setTimeout(() => {
    console.log("Task 3");
}, 1000);

console.log("Ending asynchronous tasks...");


setTimeout(() => {
  console.log("All Task Done");
}, 2000);


// callback function
// This code demonstrates the use of a callback function to handle asynchronous operations
function abc(fn){
    fn();
}

abc(function(){
    console.log("Callback fnc executed");
})