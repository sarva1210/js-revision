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