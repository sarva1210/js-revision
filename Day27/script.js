let colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "black",
    "white"
];

let btn = document.querySelector("#btn");
let color = document.querySelector("#color");

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * colors.length);

    color.innerHTML = colors[random];
    document.body.style.backgroundColor = colors[random];
});