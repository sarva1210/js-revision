let arr = [1,2,3,4,5,6,7,8,9];
console.log (arr[5]); //to access elements arr[1];

// array methods
let arr2 = [];
let arr3 = new Array();

// array operations
let arr4 = [1,2,3,4,5,6,7,8,9];
arr4.push(10); // adds 10 to the end
arr4.pop(); //removes last value
arr4.shift(); // 1 removed
arr4.unshift(1);
// arr4.indexOf(4);  shows index of 4
let[a, ,b] = arr4;
let arr5 = arr4.filter(function(val){
    return val < 5;
});
let arr6 = [...arr4]; //spread operator


let arr7 = [...arr4];
for (let i = 0; i < 5; i++) {
    console.log(arr7[i]);
}


let arr8 = [...arr4];
arr8.forEach(function(val){
    console.log(val);
})


let obj = {
    name:"emma",
    age:19,
    email:"emma@gmail.com",
    socials:{
        instagram:"emmawee",
        x:"emmaweeee"
    }
};
obj.name; //accessing name
delete obj.name; //deleting name
obj.socials.x; // nested objects

let obj2 = new Object();



// functions
function sayHello() {
    console.log("hello js");
}
sayHello();


// fnc add(a,b) that returns their sum sum and log the result
function add(a,b) {
    return a+b;
}   
let sum = add(2,3);
console.log(sum);


// fnc with default parameter name = guest that prints hi <name>
function greet(name = "guest") {
    console.log("Hi " + name);
}
greet("emma");

// or 

function greet(name = "guest"){
    console.log(`Hi ${name}`);
}
greet("emma");


// make a nested fnc where the inner one prints a variable from the outer one
function parent() {
    let a = 12;
    function child(){
        console.log(a);
    }
    child();
}
parent();


// create an array of 5 fruits . Add one at the end and one from the beginning
let arr = ["apple" , "guava" , "watermelon" , "banana", "grapes"];
arr.push("mango");
arr.unshift("orange");


// use a for loop to print all elements of an array
let arry = ["apple" , "guava" , "watermelon" , "banana", "grapes"];
for (let i = 0; i < arry.length; i++) {
    console.log(arry[i]);
}