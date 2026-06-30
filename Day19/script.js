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


// 3. Try-Catch-Finally: You can use the finally block to execute code regardless of whether an error occurred or not.
try {
    let a = 23;
    console.log(a.name.message);
} catch(err){
    console.log(err.name);
}
finally{
    console.log("heyy");
}


// more example of throwing error

try {
    let a = 168;
    console.log(a.name.message);
} catch(err){
    throw new Error("something went wrong from our side, please wait for sometime");
}


