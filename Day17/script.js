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
        cb({id:1, username:"J0sh"});
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
        cb({id:1234, username:"Josh"});
    }, 4000);
}

// fetch permissions
function fetchPermission(id, cb){
    console.log("fetching permissions...");
    setTimeout(() => {
        cb(["read", "write", "delete"])
    }, 5000);
}


// load Dashboard
function loadDashboard(permissions, cb){
    console.log("loading dashboard...");
    setTimeout(() => {
        cb();
    }, 6000);
}


// load Dashboard
loginUser("Josh", function(userdata){
    fetchPermission(userdata.id, function(permissions){
        loadDashboard(permissions, function(){
            console.log("dashboard loaded");
        });
    });
});