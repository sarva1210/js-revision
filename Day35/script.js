const slides = document.querySelectorAll(".slide");
const nextBtns = document.querySelectorAll('[id^="next"]');
const prevBtn = document.getElementById("prev");

let current = 0;
let auto;

// Show Slide
function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

// Next

function nextSlide(){
    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);
}

// Previous

function prevSlide(){
    current--;

    if(current < 0){
        current = slides.length-1;
    }

    showSlide(current);
}

// Buttons

nextBtns.forEach(btn=>{
    btn.addEventListener("click",()=>{

        nextSlide();
        restartAuto();

    });
});

if(prevBtn){
    prevBtn.addEventListener("click",()=>{

        prevSlide();
        restartAuto();

    });
}

// Keyboard

document.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowRight"){

        nextSlide();
        restartAuto();

    }

    if(e.key==="ArrowLeft"){

        prevSlide();
        restartAuto();

    }
});

// Auto Slide

function startAuto(){
    auto=setInterval(nextSlide,5000);
}

function restartAuto(){
    clearInterval(auto);
    startAuto();
}

startAuto();

// Touch Swipe

let startX=0;

document.addEventListener("touchstart",(e)=>{
    startX=e.touches[0].clientX;
});

document.addEventListener("touchend",(e)=>{
    const endX=e.changedTouches[0].clientX;

    if(startX-endX>50){

        nextSlide();
        restartAuto();

    }

    if(endX-startX>50){

        prevSlide();
        restartAuto();

    }
});

// Mouse Parallax

document.addEventListener("mousemove",(e)=>{
    const x=(e.clientX/window.innerWidth-.5)*20;
    const y=(e.clientY/window.innerHeight-.5)*20;

    slides[current].querySelector("img").style.transform=`scale(1.1) translate(${x}px,${y}px)`;
});

// Load Animation

window.addEventListener("load",()=>{
    document.body.style.opacity="1";
});