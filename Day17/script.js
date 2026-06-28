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


// get User Posts
function getUserPosts(id, cb){
    console.log("getting user posts....");
    setTimeout(() => {
        cb(["hello","good day"]);
    }, 2000);
}

getUser("Emma", function(data){
    getUserPosts(data.id, function(allposts){
        console.log(data.username, allposts);
    });
});


// login user 
function loginUser(username, cb){
    console.log("logging in user...");
    setTimeout(() => {
        cb({id:J0sh, username:"Josh"});
    }, 4000);
}

// fetch permissions
function fetchPermission(id, cb){
    console.log("fetching permissions...");
    setTimeout(() => {
        cb(["read", "write", "delete"])
    }, 5000);
}