// synchronous approach
// This code executes tasks in a sequential manner
console.log("Task 1");
console.log("Task 2");


// asynchronous approach
// This code executes tasks in a non-blocking manner
console.log("Starting asynchronous tasks...");

setTimeout(() => {
    console.log("Task 3");
}, 1000);

console.log("Ending asynchronous tasks...");


setTimeout(() => {
  console.log("All Task Done");
}, 2000);


// callback function
// This code demonstrates the use of a callback function to handle asynchronous operations
function abc(fn){
    fn();
}

abc(function(){
    console.log("Callback fnc executed");
})


// nested callback function
// This code demonstrates the use of nested callback functions to handle multiple asynchronous operations
function cde(fn1){
    fn1(function(fn3){
        fn3(function(fn5){
            fn5();
        })
    })        
}

function cde(fn2){
    fn2(function(fn4){
        fn4(function(){
            console.log("Nested callback executed");
        })
    })        
}


// situation-> bring repositry data from github
// getUserDetails(username, cb)    // JoshDetails(address, cd)
// getAllRepos(userid, cd)         // findShop(details, cd)
// getRepoDetails(repos[0], cd)    // takeThings(list, cd)
                                   // comeBackHome(address, cd)

function JoshDetails(address, cb){
    console.log("fetching details....")
    setTimeout(() => {
        cb({ lat: 23.36, lng: 76.5});
    }, 3000);
}
JoshDetails("indrapuri 231-H Block", function(details){
    console.log(details);
});                                      