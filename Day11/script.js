// Find the largest number in an array using a loop.
let arr = [1,3,5,7,9];
let max = arr[0];
for(let num of arr){
    if(num>max)
        max = num;
}
console.log(max);


// Count how many numbers in an array are greater than 60.
let arr2 = [20,50,56,79,80];
let count = 0;
for(let num of arr2){
    if(num>60)
        count++;
}
console.log(count);


// Reverse an array manually using a loop (without .reverse()).
let arr3 = [2, 4, 6, 8, 10];
let rev = [];

for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
}
console.log(rev);