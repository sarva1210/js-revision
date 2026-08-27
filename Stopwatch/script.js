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


function setTimerFromInputs(){
    const hours =
        Math.max(
            0,
            Number(hoursInput.value) || 0
        );

    const minutes =
        Math.max(
            0,
            Number(minutesInput.value) || 0
        );

    const seconds =
        Math.max(
            0,
            Number(secondsInput.value) || 0
        );

    remainingSeconds =
        hours * 3600 +
        minutes * 60 +
        seconds;

    if(remainingSeconds === 0){
        remainingSeconds = 60;
    }

    totalSeconds =
        remainingSeconds;

    updateDisplay();
}


function changeMode(mode){
    stopTimer();

    currentMode = mode;

    modeButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.mode === mode
        );
    });

    if(mode === "pomodoro"){
        timerInputs.style.display = "none";
        pomodoroControls.style.display = "flex";

        remainingSeconds =
            currentPomoDuration * 60;

        totalSeconds =
            remainingSeconds;

        timerLabel.textContent =
            "Focus Session";
    }

    if(mode === "stopwatch"){
        timerInputs.style.display = "none";
        pomodoroControls.style.display = "none";

        remainingSeconds = 0;
        totalSeconds = 0;

        timerLabel.textContent =
            "Stopwatch";
    }

    if(mode === "timer"){
        timerInputs.style.display = "flex";
        pomodoroControls.style.display = "none";

        timerLabel.textContent =
            "Custom Timer";

        setTimerFromInputs();
    }

    updateDisplay();
}    


function changePomodoroDuration(duration){
    stopTimer();

    currentPomoDuration =
        Number(duration);

    remainingSeconds =
        currentPomoDuration * 60;

    totalSeconds =
        remainingSeconds;

    pomoButtons.forEach(button => {
        button.classList.toggle(
            "active",
            Number(button.dataset.duration) ===
            currentPomoDuration
        );
    });

    timerLabel.textContent = "Focus Session";

    updateDisplay();

    localStorage.setItem(
        "focusflow-duration",
        currentPomoDuration
    );
}

function finishSession(){
    stopTimer();

    if(currentMode === "pomodoro"){
        completeFocusSession();

        return;
    }

    remainingSeconds = 0;

    updateDisplay();

    showToast(
        "Timer completed!"
    );

    notifyUser(
        "Timer Complete",
        "Your timer has finished."
    );
}

function completeFocusSession(){
    completedSessions++;

    totalFocusMinutes +=
        currentPomoDuration;

    currentCycle++;

    if(currentCycle > 4){
        currentCycle = 1;
    }

    saveData();

    updateStats();

    showToast(
        `Focus session ${completedSessions} completed!`
    );

    notifyUser(
        "Focus Session Complete",
        "Great work! Time for a break."
    );

    const longBreak =
        completedSessions % 4 === 0;

    if(autoStart.checked){
        setTimeout(() => {

            if(longBreak){
                startBreak(15);
            }else{
                startBreak(5);
            }

        },1200);

        return;
    }

    if(longBreak){
        showToast(
            "Amazing! Take a 15 minute break."
        );
    }else{
        showToast(
            "Great work! Take a 5 minute break."
        );
    }

    remainingSeconds = 0;

    updateDisplay();
}

function startBreak(minutes){
    stopTimer();

    currentPomoDuration =
        minutes;

    remainingSeconds =
        minutes * 60;

    totalSeconds =
        remainingSeconds;

    pomoButtons.forEach(button => {
        button.classList.remove("active");
    });

    timerLabel.textContent =
        minutes === 15
            ? "Long Break"
            : "Short Break";

    updateDisplay();

    showToast(
        minutes === 15
            ? "Long break started"
            : "Short break started"
    );

    startTimer();
}


function updateStats(){
    const statElements =
        document.querySelectorAll("[data-stat]");

    statElements.forEach(element => {

        const type =
            element.dataset.stat;

        if(type === "sessions"){
            element.textContent =
                `${completedSessions}/${dailyGoal}`;
        }

        if(type === "focus"){
            element.textContent =
                `${totalFocusMinutes} min`;
        }

        if(type === "cycle"){
            element.textContent =
                currentCycle;
        }

    });

    const progress =
        Math.min(
            (completedSessions / dailyGoal) * 100,
            100
        );

    const progressBar =
        document.querySelector(".goal-progress");

    if(progressBar){
        progressBar.style.width =
            `${progress}%`;
    }
}

function toggleSound(){
    if(audioPlayer.paused){

        audioPlayer.play()
            .then(() => {

                soundPlayBtn.innerHTML =
                    '<i class="fa-solid fa-pause"></i>';

            })
            .catch(() => {

                showToast(
                    "Add the audio files to assets/audio"
                );

            });

        return;
    }

    audioPlayer.pause();

    soundPlayBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';
}

function changeSound(sound){
    if(!sounds[sound]){
        return;
    }

    currentSound = sound;

    audioPlayer.pause();

    audioPlayer.src =
        sounds[sound];

    audioPlayer.volume =
        Number(volumeSlider.value);

    soundButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.sound === sound
        );

    });

    const selectedButton =
        document.querySelector(
            `.sound-btn[data-sound="${sound}"]`
        );

    if(selectedButton){

        const label =
            selectedButton.querySelector("span");

        if(label){
            soundName.textContent =
                label.textContent;
        }

    }

    soundPlayBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

    localStorage.setItem(
        "focusflow-sound",
        sound
    );
}

function setVolume(value){
    const volume =
        Math.max(
            0,
            Math.min(
                1,
                Number(value)
            )
        );

    audioPlayer.volume =
        volume;

    localStorage.setItem(
        "focusflow-volume",
        volume
    );
}

function changeBackground(background){
    if(!backgrounds[background]){
        return;
    }

    document.body.style.backgroundImage =
        `url("${backgrounds[background]}")`;

    backgroundOptions.forEach(option => {

        option.classList.toggle(
            "active",
            option.dataset.background === background
        );

    });

    backgroundOptions.forEach(option => {

        option.classList.toggle(
            "active",
            option.dataset.background === background
        );

    });

    localStorage.setItem(
        "focusflow-background",
        background
    );

    showToast(
        "Background changed"
    );

    backgroundOptions.forEach(option => {

        option.classList.toggle(
            "active",
            option.dataset.background === background
        );

    });

    localStorage.setItem(
        "focusflow-background",
        background
    );

    showToast(
        "Background changed"
    );
}


function updateGreeting(){
    const now = new Date();
    const hour = now.getHours();

    if(hour < 12){
        greetingText.textContent =
            "Good Morning";
    }else if(hour < 18){
        greetingText.textContent =
            "Good Afternoon";
    }else{
        greetingText.textContent =
            "Good Evening";
    }

    currentDate.textContent =
        now.toLocaleDateString(
            "en-US",
            {
                weekday:"long",
                month:"long",
                day:"numeric"
            }
        );
}


function showToast(message){
    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    clearTimeout(
        showToast.timeout
    );

    showToast.timeout =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        },2200);
}