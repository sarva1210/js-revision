// afterdelay
function afterDelay(time, cb){
    setTimeout(function(){
        cb();
    },time);
}

afterDelay(3000, function(){
    console.log("callback executed");
});