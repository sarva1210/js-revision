// Find the largest number in an array using a loop.
let arr = [1,3,5,7,9];
let max = arr[0];
for(let num of arr){
    if(num>max)
        max = num;
}
console.log(max);