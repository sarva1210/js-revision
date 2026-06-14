// print the multiplication table of 5
for (let i = 1; i < 11; i++) {
    console.log(`5 x ${i} = ${5*i}`);
}

// same for 38
for (let i = 1; i < 11; i++) {
    console.log(`38 x ${i} = ${38*i}`);
}

// how many num b/w 1 to 15 greater than 8 loop and count conditionally
let count = 0;
for (let i = 0; i < 16; i++) {
    if (i>8) {
        count++
    }
}
console.log(`total count is ${count}`);
