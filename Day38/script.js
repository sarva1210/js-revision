//  wap to remove duplicate elements from an array
function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }   
        return uniqueArray;
    }
}

// or 

function removeDuplicates(arr){
    return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,4,4,5]));



// wap to find missing number
function missing(arr) {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;
    let actual = arr.reduce((acc, curr) => acc + curr, 0);
    return total - actual;
}

console.log(missing([1, 2, 3, 5, 9]));


// wap to capatalize the first letter of each word in a string
function capitalize(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalize("hello world"));



// wap to Sort Array Without sort()
function sortArray(arr) {
    for (let i = 0; i< arr.length; i++) {
        for (let j=0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArray([5, 3, 12, 21, 46, 8, 1, 45, 2]));


// Find the Longest Word
function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';
    for (let i = 0; i< words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

console.log(findlongestWord('The quick brown fox jumped over the lazy dog'));


// Reverse each word in a string
function reverseWords(str) {
    return str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseWords("the quick brown fox jumped over the lazy dog"));


// Remove Falsy Values from an Array
function removeFalsy(arr) {
    return arr.filter(Boolean);
}

console.log(removeFalsy([0, 1, false, 2, "", 3, null]));


// Remove Spaces from a String
function removeSpaces(str){
    return str.replace(/\s/g,"");
}

console.log(removeSpaces("the quick brown fox jumped over the lazy dog"));


// Swap Two Variables
let a = 100;
let b = 250;
[a,b] = [b,a];

console.log(a,b);


// find lcm of two numbers
function gd(a,b){
    while(b){
        [a,b]=[b,a%b];
    }
    return a;
}

function lcm(a,b){
    return (a*b)/gd(a,b);
}

console.log(lcm(14,20));


// Count Even and Odd Numbers in an Array
function countEvenOdd(arr){
    let even = 0;
    let odd = 0;

    for(let num of arr){
        num%2===0 ? even++ : odd++;
    }
    return {even,odd};
}

console.log(countEvenOdd([1,2,3,4,5,6]));


// bubble sort
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){

        for(let j=0;j<arr.length-i-1;j++){

            if(arr[j]>arr[j+1]){

                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([7,3,1,9,5]));


// find common elements in two arrays
function common(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

console.log(common([1,2,3,4],[3,4,5,6]));


// Move Zeros to End of Array
function moveZeros(arr){
    let result=arr.filter(num=>num!==0);
    let zeros=arr.filter(num=>num===0);

    return [...result,...zeros];
}

console.log(moveZeros([1,0,2,0,5,0]));


// Find the Third Largest Element
function thirdLargest(arr) {
    let unique = [...new Set(arr)].sort((a, b) => b - a);
    return unique[2];
}

console.log(thirdLargest([5,9,3,7,8,9,10]));


// find the 2nd smallest element in an array
function secondSmallest(arr){
    let unique = [...new Set(arr)].sort((c,d)=>c-d)
    return unique[1];
}

console.log(secondSmallest([5,9,3,7,8,9,10]));


// Find All Pairs with Given Sum
function findPairs(arr, target) {
    let set = new Set();

    for (let num of arr) {
        let diff = target - num;

        if (set.has(diff)) {
            console.log(diff, num);
        }
        set.add(num);
    }
}

findPairs([2,4,3,5,7,8], 10);