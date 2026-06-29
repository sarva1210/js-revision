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


// fetch API
// The fetch() method is used to make network requests. It returns a promise that resolves to the Response object representing the response to the request.
fetch('https://randomuser.me/api/')
  .then((raw)=> raw.json())
  .then(function(data){
    console.log(data.results[0].name.first);
})
  .catch((error)=>{
    console.log(error);
});


// async/await:- works on promise
// The async/await syntax is a way to work with promises in a more synchronous manner.
async function ab() {
    let raw = await fetch('https://randomuser.me/api/');
    let data = await raw.json();
    console.log(data);
}
ab();


// create a promise that resolves if the random number generated is less than 5 and rejects if it is greater than or equal to 5. Use async/await to handle the promise.
function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random()*10);
            if(num<5){
                resolve(true);
            } else reject(false);
        }, 3000);
    });
}

async function cd() {
    let v = await getNum();
    console.log(v);
}