let count = 23;
console.log(count);
count++;
console.log(count);
++count;
console.log(count);
count--;
console.log(count);
--count;
console.log(count);


let a = 23;
if(a>5 && a<20 && a===10){
    console.log("all values are true");
}else{
    console.log("false");
}

test();
function test() {
    console.log("hello");
}

hello();
var hello = function(){
    console.log("hi"); // this will give an error because hello is not a function at the time of calling
}

// variable gets hoisted like var , let and const get hoisted but is initialised
//fuctions are not hoisted fully