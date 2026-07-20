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