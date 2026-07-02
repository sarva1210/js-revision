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


// Throttling
// Limits the execution of a function to once every specified amount of time, regardless of how many times it is called.

function throttle(fn,delay){
    let last = 0;
    return function(){
        const now = Date.now();
        if(now - last >= delay){
            last = now;
            fn();
        }
    }
}

window.addEventListener("mousemove", throttle(function(){
    console.log("mouse moved")
},2000)
);