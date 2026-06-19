// Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.
function runTwice(fn) {
    fn();
    fn();
}
runTwice(function(){
    console.log("hello")
});