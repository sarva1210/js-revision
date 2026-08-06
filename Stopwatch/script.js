// Elements
const display=document.getElementById("display");
const modeTitle=document.getElementById("modeTitle");
const stopwatchMode=document.getElementById("stopwatchMode");
const timerMode=document.getElementById("timerMode");
const timerInput=document.getElementById("timerInput");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");
const startBtn=document.getElementById("startBtn");
const pauseBtn=document.getElementById("pauseBtn");
const resetBtn=document.getElementById("resetBtn");
const lapBtn=document.getElementById("lapBtn");
const lapList=document.getElementById("lapList");
const clearLaps=document.getElementById("clearLaps");
const lapCount=document.getElementById("lapCount");
const fastestLap=document.getElementById("fastestLap");
const currentMode=document.getElementById("currentMode");
const toast=document.getElementById("toast");


// Variables
let stopwatch=true;
let running=false;
let interval=null;
let totalMilliseconds=0;
let totalSeconds=0;
let lapCounter=0;
let fastest=null;


// Format time
function formatTime(ms){
    const hrs=Math.floor(ms/3600000);
    const mins=Math.floor((ms%3600000)/60000);
    const secs=Math.floor((ms%60000)/1000);

    return`${String(hrs).padStart(2,"0")}:${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
}

// Update display
function updateDisplay(){
    display.textContent=formatTime(totalMilliseconds);
}

// Show toast
function showToast(message){
    toast.textContent=message;
    toast.classList.add("show");

    setTimeout(()=>{
        toast.classList.remove("show");
    },2000);
}


// Stopwatch mode
stopwatchMode.addEventListener("click",()=>{
    stopwatch=true;

    stopwatchMode.classList.add("active");
    timerMode.classList.remove("active");

    modeTitle.textContent="Stopwatch";
    currentMode.textContent="Stopwatch";

    timerInput.style.display="none";
    lapBtn.style.display="flex";

    reset();
});

// Timer mode
timerMode.addEventListener("click",()=>{
    stopwatch=false;

    timerMode.classList.add("active");
    stopwatchMode.classList.remove("active");

    modeTitle.textContent="Countdown Timer";
    currentMode.textContent="Timer";

    timerInput.style.display="flex";
    lapBtn.style.display="none";

    reset();
});


// Reset values
function reset(){
    clearInterval(interval);
    running=false;

    totalMilliseconds=0;
    totalSeconds=0;

    updateDisplay();
}

// Initial display
updateDisplay();


// Start
function start(){
    if(running) return;
    running=true;

    if(stopwatch){
        interval=setInterval(()=>{
            totalMilliseconds+=1000;
            updateDisplay();
        },1000);
    }else{

        totalSeconds=
        Number(hours.value||0)*3600+
        Number(minutes.value||0)*60+
        Number(seconds.value||0);

        if(totalSeconds<=0){
            showToast("Enter a valid time");
            running=false;
            return;
        }
        totalMilliseconds=totalSeconds*1000;
        updateDisplay();


        interval=setInterval(()=>{
            totalSeconds--;
            totalMilliseconds=totalSeconds*1000;

            updateDisplay();
            if(totalSeconds<=0){
                clearInterval(interval);
                running=false;
                showToast("Time's Up!");
            }
        },1000);
    }
}


// Pause
function pause(){
    clearInterval(interval);
    running=false;
}

// Reset
function reset(){
    clearInterval(interval);
    running=false;

    totalMilliseconds=0;
    totalSeconds=0;

    hours.value="";
    minutes.value="";
    seconds.value="";

    updateDisplay();
}


// Start button
startBtn.addEventListener("click",start);

// Pause button
pauseBtn.addEventListener("click",pause);

// Reset button
resetBtn.addEventListener("click",reset);


// Add lap
function addLap(){
    if(!stopwatch||!running) return;
    lapCounter++;

    lapCount.textContent=lapCounter;

    const lapTime=formatTime(totalMilliseconds);

    if(!fastest||totalMilliseconds<fastest){
        fastest=totalMilliseconds;
        fastestLap.textContent=lapTime;
    }
    const li=document.createElement("li");

    li.innerHTML=`
        <span>Lap ${lapCounter}</span>
        <strong>${lapTime}</strong>
    `;

    lapList.prepend(li);
    saveLaps();
}


// Clear laps
function clearLapHistory(){
    lapList.innerHTML="";
    lapCounter=0;

    fastest=null;

    lapCount.textContent="0";
    fastestLap.textContent="--:--";

    localStorage.removeItem("laps");
}

// Save laps
function saveLaps(){
    localStorage.setItem("laps",lapList.innerHTML);
}