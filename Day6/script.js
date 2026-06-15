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
