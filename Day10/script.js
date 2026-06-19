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