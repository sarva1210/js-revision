function doSomething(name, age, email) {
    // console.log(name, age, email); or
    console.log(arguments);
    console.log(arguments[0]); // to get single value
} //parameters
doSomething("emma", 19, "emma@gmail.com"); //arguments


function hi(name) {
   console.log("Hi " + name); 
}
hi("emma");


function ab(a,b,...c) {
    console.log(a,b,c);
}
ab(1,2,3,4,5,6);


b();
function b(){
    console.log("js");
}


// function hoisting -> When you use function declaration, entire function goes to top.
sayHello();
function sayHello() {
  console.log("Hello");
}


function abcd({name,age}){
    console.log(name,age);
}
abcd({name:"emma", age: "19"}); //destructed


function value(...val) {
    console.log(val);
}
value(1,2,3,4,5,6,7,8,9); //rest


function values(a,b,c) {
    console.log(a,b,c);
}
values(1,2) //default


function cd(a,b,c,d) {
    console.log(a,b,c,d);
}//positional
cd(1,2,3,4); //value dena zaruri hai (1,2,null,4) if c nhi dena toh kuch value dena padega


function ef(a,b=3,c,d) {
    console.log(a,b,c,d);
}//default
ef(1,undefined,3,4);


function gh(a,b,c,d) {
    console.log(a,b,c,d);
}//spread
let arr = [5,6,7,8];
gh(...arr);


function abcd() {
    function defg() {
        console.log("defg will work");
    }
    defg(); //nested function -> function inside function
}
abcd();


// scope chain
let a = 12; //globel scope
function abcd() {
    let b = 14; //scoping
    function defg() {
        console.log(b);
    }
    defg();
}
console.log(a);