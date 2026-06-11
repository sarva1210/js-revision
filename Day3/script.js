// if- else statement is used to execute a block of code based on a condition. If the condition is true, the code inside the if block will be executed. If the condition is false, the code inside the else block will be executed.

let a = 12;
if(a>10){
    console.log("hey!!");
} else{
    console.log("bye bye!");
}

// truthy and falsy values are used in JavaScript to determine the boolean value of a variable or expression. A truthy value is any value that is considered true when evaluated in a boolean context, while a falsy value is any value that is considered false. 
// 0, null, undefined, NaN, and an empty string are examples of falsy values, while all other values are considered truthy.

if(10){
    console.log("hey");
} else{
    console.log("goodbye!");
} //truthy


if(0){
    console.log("hie");
}else{
    console.log("byee");
} //falsy 


// if-else if statement is used to execute a block of code based on multiple conditions. It allows you to check multiple conditions and execute different blocks of code based on which condition is true.

if(12>13){
    console.log("12 is greater");
}else if(14>15){
    console.log("14 is greater");
}else if(15>16){
    console.log("13 is greater");
}else{
    console.log("non are true");
}

// ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.
23 > 13 ? console.log("yes") : console.log("nope");

// switch statement is used to execute a block of code based on different cases. It is an alternative to using multiple if-else statements when you have multiple conditions to check. The switch statement evaluates an expression and matches it against different cases, executing the corresponding block of code for the first matching case.
switch(2){
    case 1:
        console.log("hi");
        break;
    case 2:    
        console.log("hie");
        break;
    case 3:    
        console.log("heyy");
        break;
    case 4:    
        console.log("hello");
        break;
    default:    
        console.log("default case");
}