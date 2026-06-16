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