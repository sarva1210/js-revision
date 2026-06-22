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


// Find the sum of all numbers in an array using a loop.
let arr4 = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of arr4) {
    sum += num;
}
console.log(sum);


// Calculate the factorial of a number using a loop.
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial*=i;
}
console.log(factorial);


// Print all keys and values of an object using for...in.
let obj = {name:"sarva", age:19};
for(let key in obj){
    console.log(key,obj[key]);
}


// Print characters of a string one-by-one using a loop.
let string = "js-revision";
for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
}