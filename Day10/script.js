// Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.
function runTwice(fn) {
    fn();
    fn();
}
runTwice(function(){
    console.log("hello")
});


// Create one pure function that always returns the same output for a given input,and one impure function using a global variable.
function pure(a,b) {
    console.log(a+b);
}
pure(1,2)
pure(1,2)

let global=0;
function impure(c) {
    global++;
    console.log(c+global);
}

impure(4) //5
impure(4) //6


// Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.
function ab({name,age}) {
    console.log(name,age);
}

ab(
    {name: "emma", age:19}
);



// Demonstrate the difference between a normal function and an arrow function when used as object methods (the `this` issue).
function bc() {
    console.log(this); //window object
}
bc();

let obj = {
    name: "emmy",
    fnc: function(){
        console.log(this);
    },
    fnc2: ()=>{ //arrow takes value from the parent function "here parent is obj and obj is a global function"
        console.log(this);
    }
};
obj.fnc(); //obj
obj.fnc2(); //window object bcoz arrow fnc does not have its own "this" it takes from the parent function 

let object = {
    name: "emmy",
    fnc: function(){
        let fnc2 = ()=>{ 
            console.log(this);
    }
    fnc2();
    },
};
object.fnc(); //obj bcoz here parent function is fnc and fnc is a method of object so "this" will refer to the object in the arrow function as well.

let objt = {
    name: "sarva",
    fnc: function(){
        function fnc2(){ 
            console.log(this);
    }
    fnc2();
    },
};
objt.fnc(); //window object bcoz here parent function is fnc and fnc2 is a normal function so "this" will refer to the window object in the normal function.


// Given an array of numbers, use `map()` to create a new array where each number is squared.
let arr = [1,3,5,7,9];
let newarr = arr.map(function(val){
    return val*val;
});
console.log(newarr);


// Use `filter()` to get only even numbers from an array.
let arr2 = [1,2,3,4,5,6,7,8,9,10];
let arr3 = arr2.filter(function(val){
    return val%2===0;
});
console.log(arr3);


// Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.
let salary = [10000, 20000, 30000];
let ans = salary.reduce(function(acc,val){
    return acc+val;
},0);
console.log(ans);