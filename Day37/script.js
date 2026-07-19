const loaders = document.querySelectorAll(".loader");
let speed = 1;

// Pause / Resume on Click
loaders.forEach(loader => {
    loader.addEventListener("click", () => {
        const state =
            loader.style.animationPlayState === "paused"
                ? "running"
                : "paused";

        loader.style.animationPlayState = state;

        loader.querySelectorAll("*").forEach(el => {
            el.style.animationPlayState = state;
        });
    });
});

// Increase / Decrease Speed
document.addEventListener("keydown", e => {

    if (e.key === "+") {
        speed += 0.2;
        updateSpeed();
    }

    if (e.key === "-") {
        speed = Math.max(0.2, speed - 0.2);
        updateSpeed();
    }

    if (e.key.toLowerCase() === "r") {
        speed = 1;

        loaders.forEach(loader => {
            loader.style.animationPlayState = "running";
            loader.style.animationDuration = "";

            loader.querySelectorAll("*").forEach(el => {
                el.style.animationPlayState = "running";
                el.style.animationDuration = "";
            });
        });
    }
});

function updateSpeed() {
    loaders.forEach(loader => {
        loader.style.animationDuration = `${1 / speed}s`;

        loader.querySelectorAll("*").forEach(el => {
            el.style.animationDuration = `${1 / speed}s`;
        });
    });
}

console.log(`
Controls:
Click = Pause / Resume
+ = Faster
- = Slower
R = Reset
`);