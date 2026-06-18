// use rest parameters to make a fnc that adds unlimited nums
function addunlimitednum(...nums) { 
    console.log(nums);
}
addunlimitednum(1,3,5,7,9,11,13,15,17,19);


function addunlimitednums(...nums) { 
    let sum = 0;
    nums.forEach(function(val){
        sum = sum+val;
    });
    console.log(sum);
}
addunlimitednums(2,4,6,8,10);


function addunlimitednumbs(...nums) { 
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log(sum);
}
addunlimitednumbs(1,2,3,4);


function addunlimitednumber(...nums) {
    let ans = nums.reduce(function(acc, val){ //reduce->convert array into 1 value 
        return acc + val
    }, 0); //0 is the value of acc 
    console.log(ans);
}
addunlimitednumber(1,2,3,4,5,6,7,8,9);
