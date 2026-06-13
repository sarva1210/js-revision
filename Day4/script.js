// print even no from 1 to 20
for (let i = 0; i < 21; i+=2) {
    console.log(i);  
}

for (let i = 1; i < 21; i++) {
    if (i%2===0) {
        console.log(i);
    }  
}


// print from 10 to 1
for (let i = 10; i > 0; i--) {
    console.log(i);   
}

// print yes 5 times
for (let i = 1; i < 6; i++) {
    console.log("yes");   
}


// even or odd 1 to 10
for (let i = 1; i < 11; i++) {
    if (i%2===0) {
        console.log(`${i} - even`);
    } else {
        console.log(`${i} - odd`);
    }
}


// +ve or -ve
let num = +prompt("tell me your number");
if (num%2===0) {
    console.log(`${num} is +ve`);
} else {
    console.log(`${num} is -ve`);
}


// eligible or not
let age = prompt("tell me your age");
if (age===null) {
    console.error("you pressed cancel!!")
}else if (age>=18) {
    console.log("you can vote now");
} else {
    if (age.trim() === "") {
        console.error("write properly");
    }
    age = Number(age.trim());
    if (isNaN(age)) {
        console.error("please enter the number")
    }
    console.log("you can not vote now maybe next time");
}

// NaN === NaN ----> false
// isNaN(NaN) -----> true


// or 


let age = prompt("Tell me your age");

if (age === null) {
    console.error("You pressed cancel!");
} else if (age.trim() === "") {
    console.error("Write properly!");
} else {
    age = Number(age.trim());

    if (isNaN(age)) {
        console.error("Please enter a number!");
    } else if (age >= 18) {
        console.log("You can vote ^-^");
    } else {
        console.log("You cannot vote -_-");
    }
}