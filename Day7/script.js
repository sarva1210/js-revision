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