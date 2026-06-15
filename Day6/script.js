// continue the loop until user say stop and count the no of yes user said
let word = prompt("tell words!");
let counter = 0;
while (word !== "stop") {
    if (word==="yes") counter++;
    word = prompt("tell words!");
} 
console.log(`total time yes count: ${counter}`);


//  print numbers divisible by 7 from 1 to 50
for (let i = 0; i < 51; i++) {
    if (i%7 === 0) {
        console.log(i);
    }
}


// sum of all odd numbers from 1 to 100
let sum = 0;
for (let i = 0; i < 101; i++) {
    if (i%2 !== 0) {
        sum = sum + i;
    }
}
console.log(sum);


// Keep asking number until user enters an even number Stop only if input is even.
let num = prompt("tell numbers");
num = Number(num);
while (num%2 !== 0) {
    num = prompt("tell numbers");
    num = Number(num);
}


// Print numbers between two user inputs Input start and end using prompt()
let start = prompt("start");
let end = prompt("end");
if (start>end ) console.error("start cant be bigger than end");
for (let i = start; i <= end; i++) {
    console.log(i);
}


// Print only first 3 odd numbers from 1 to 20
let count = 0;
for (let i = 0; i < 21; i++) {
    if(count === 3) break;
    if (i%2 !== 0) {
        console.log(i);
        count++;
    }
}


// Ask user 6 numbers. Count how many are positive
counter = 0;
for (let i = 1; i <= 6; i++) {
    let num = +prompt("give number");
    if(num>=0) counter++;
}
console.log(counter);


// do while in js
let i = 1;
do {
    console.log(i);
    i++;
} while (i<11);


// recursion in js -> function calling function
function abc(n){
    if (n===0) return;
    console.log(n);
    abc(n-1);
}
abc(4);


// continue
for (let i = 0; i < 11; i++) {
    if(i===5) continue;
    console.log(i);
}