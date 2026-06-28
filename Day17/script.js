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