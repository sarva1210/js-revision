// debouncing & throttling

// Debouncing
// Delays the execution of a function until after a certain amount of time has passed since the last time it was called.

function debounce(fn, delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    }
}

document.querySelector('#search')
.addEventListener("input", debounce(function(){
    console.log("working");
},600)
);  

// or can be written as timing is different for each function call, so we can use the following code to make it work properly.

function debounce(fn, delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    }
}

document.querySelector('#search')
.addEventListener("input", debounce(function(){
    console.log("yes its working");
},1000)
);