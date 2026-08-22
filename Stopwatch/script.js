const timerDisplay = document.getElementById("timerDisplay");
const timerLabel = document.getElementById("timerLabel");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const modeButtons = document.querySelectorAll(".mode-btn");
const pomoButtons = document.querySelectorAll(".pomo-btn");
const timerInputs = document.getElementById("timerInputs");
const pomodoroControls = document.getElementById("pomodoroControls");
const hoursInput = document.getElementById("timerHours");
const minutesInput = document.getElementById("timerMinutes");
const secondsInput = document.getElementById("timerSeconds");
const soundButtons = document.querySelectorAll(".sound-btn");
const soundPlayBtn = document.getElementById("soundPlayBtn");
const soundName = document.getElementById("soundName");
const audioPlayer = document.getElementById("audioPlayer");
const volumeSlider = document.getElementById("volumeSlider");
const backgroundBtn = document.getElementById("backgroundBtn");
const backgroundMenu = document.getElementById("backgroundMenu");
const closeBackground = document.getElementById("closeBackground");
const backgroundOptions = document.querySelectorAll(".background-option");
const settingsBtn = document.getElementById("settingsBtn");
const settingsMenu = document.getElementById("settingsMenu");
const closeSettings = document.getElementById("closeSettings");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const darkOverlay = document.getElementById("darkOverlay");
const autoStart = document.getElementById("autoStart");
const notifications = document.getElementById("notifications");
const toast = document.getElementById("toast");
const currentDate = document.getElementById("currentDate");
const greetingText = document.getElementById("greetingText");

// Timer variables
let timer = null;
let currentMode = "pomodoro";
let isRunning = false;
let currentPomoDuration = 25;
let remainingSeconds = 25 * 60;
let totalSeconds = remainingSeconds;
let currentSound = "rain";

// Data variables
let completedSessions = 0;
let totalFocusMinutes = 0;
let currentCycle = 0;

// Constants
const dailyGoal = 8;
const storageKey = "focusflow-data";

const sounds = {
    rain: "assets/audio/rain.mp3",
    piano: "assets/audio/piano.mp3",
    ocean: "assets/audio/ocean.mp3",
    forest: "assets/audio/forest.mp3",
    cafe: "assets/audio/cafe.mp3",
    fireplace: "assets/audio/fireplace.mp3"
};

const backgrounds = {
    "fuji.jpg": "assets/backgrounds/fuji.jpg",
    "meadow.jpg": "assets/backgrounds/meadow.jpg",
    "rain.jpg": "assets/backgrounds/rain.jpg",
    "forest.jpg": "assets/backgrounds/forest.jpg",
    "ocean.jpg": "assets/backgrounds/ocean.jpg",
    "night.jpg": "assets/backgrounds/night.jpg"
};

function getToday(){
    return new Date().toISOString().split("T")[0];
}


function loadData(){
    const savedData = JSON.parse(
        localStorage.getItem(storageKey)
    );

    if(!savedData){
        return;
    }

    if(savedData.date !== getToday()){
        completedSessions = 0;
        totalFocusMinutes = 0;
        currentCycle = 0;

        saveData();

        return;
    }

    completedSessions =
        savedData.completedSessions || 0;

    totalFocusMinutes =
        savedData.totalFocusMinutes || 0;

    currentCycle =
        savedData.currentCycle || 0;
}

function saveData(){
    localStorage.setItem(
        storageKey,
        JSON.stringify({
            date: getToday(),
            completedSessions,
            totalFocusMinutes,
            currentCycle
        })
    );
}


function formatTime(seconds){
    const hours = Math.floor(seconds / 3600);

    const minutes = Math.floor(
        (seconds % 3600) / 60
    );

    const secs = seconds % 60;

    if(currentMode === "timer"){
        return `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
    }

    return `${String(minutes).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
}


function updateDisplay(){
    timerDisplay.textContent =
        formatTime(remainingSeconds);

    document.title =
        `${formatTime(remainingSeconds)} • FocusFlow`;
}


function stopTimer(){
    clearInterval(timer);

    timer = null;
    isRunning = false;

    startBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';
}

function startTimer(){
    if(isRunning){
        return;
    }

    if(
        currentMode === "timer" &&
        remainingSeconds <= 0
    ){
        setTimerFromInputs();
    }

    isRunning = true;

    startBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

    timer = setInterval(() => {

        if(currentMode === "stopwatch"){
            remainingSeconds++;

            updateDisplay();

            return;
        }

        if(remainingSeconds > 0){
            remainingSeconds--;

            updateDisplay();

            return;
        }

        finishSession();

    },1000);
}

function pauseTimer(){
    stopTimer();
}

function resetTimer(){
    stopTimer();

    if(currentMode === "pomodoro"){
        remainingSeconds =
            currentPomoDuration * 60;

        totalSeconds =
            remainingSeconds;
    }

    if(currentMode === "stopwatch"){
        remainingSeconds = 0;
        totalSeconds = 0;
    }

    if(currentMode === "timer"){
        setTimerFromInputs();
    }

    updateDisplay();
}