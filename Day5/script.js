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


// ask user for password and print access status hardcoded correct password . Compare with user input
let password = "123456";
let pass = prompt("tell your password");
if (pass === null) {
    console.error("you cancelled it....");
}else{
    if (pass===password) {
        console.log("Matched!");
    }else{ 
        console.log("Not matched");
    }
}


// print "hi" 10 times using while loop
let i = 1;
while (i<=10) {
    console.log("hi");
    i++;
}


// 3 attemps to enter password if right --> stop , if not "account locked"
let attempts = 0;
let opened = false;
let pwd = "123456";
let passward = prompt("give passward");
attempts++;
if (passward === pwd) opened =true;
while (passward!== pwd) {
    if (attempts===3) {
        console.error("account locked");
        break;
    }
    pwd = prompt("give passward");
    if (passward === pwd) opened =true;
    attempts++;
}
if(opened === true) console.log("account opened");