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


// nested callback function
// This code demonstrates the use of nested callback functions to handle multiple asynchronous operations
function cde(fn1){
    fn1(function(fn3){
        fn3(function(fn5){
            fn5();
        })
    })        
}

function cde(fn2){
    fn2(function(fn4){
        fn4(function(){
            console.log("Nested callback executed");
        })
    })        
}