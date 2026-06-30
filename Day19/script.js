// Error Handling
// it is important to handle errors in your code to prevent unexpected crashes and provide a better user experience.

//  Here are some common techniques for error handling in JavaScript:

// 1. Try-Catch Block: Use try-catch blocks to catch and handle exceptions that may occur during code execution.
try {
    let a = 12;
    console.log(a.name.age);
} catch(err){
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}

console.log("heyy");

// 2. Throwing Errors: You can throw custom errors using the throw statement.
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}