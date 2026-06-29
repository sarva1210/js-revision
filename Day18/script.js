// promises
// A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

// Three states of a promise:
// 1. Pending: initial state, neither fulfilled nor rejected.
// 2. Fulfilled: meaning that the operation completed successfully.
// 3. Rejected: meaning that the operation failed.


const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve();
    }, 2000);
});

promise
    .then(function(){
        console.log("hey it's resolved");
    })
    .catch(function(){
        console.log("it's rejected");
});