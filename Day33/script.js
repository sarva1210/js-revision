const words = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Enthusiast"
];

let index = 0;

function changeText() {
    document.getElementById("typing").textContent = words[index];
    index++;

    if(index === words.length){
        index = 0;
    }
}

changeText();

setInterval(changeText,2000);