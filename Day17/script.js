// after delay
function afterDelay(time, cb){
    setTimeout(function(){
        cb();
    },time);
}

afterDelay(3000, function(){
    console.log("callback executed");
});


// get user
function getUser(username, cb){
    console.log("getting user details.....");
    setTimeout(()=>{
        cb({id:1, username:"Emma"});
    },1000);
}