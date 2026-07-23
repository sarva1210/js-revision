// Elements
const gameBoard = document.getElementById("gameBoard");
const timer = document.getElementById("timer");
const moves = document.getElementById("moves");
const score = document.getElementById("score");
const pairsFound = document.getElementById("pairsFound");
const restartBtn = document.getElementById("restartBtn");
const popup = document.getElementById("popup");
const playAgainBtn = document.getElementById("playAgainBtn");
const finalTime = document.getElementById("finalTime");
const finalMoves = document.getElementById("finalMoves");
const finalScore = document.getElementById("finalScore");

// Card icons
const icons=[
'<i class="fa-solid fa-gem"></i>',
'<i class="fa-solid fa-crown"></i>',
'<i class="fa-solid fa-rocket"></i>',
'<i class="fa-solid fa-bolt"></i>',
'<i class="fa-solid fa-bullseye"></i>',
'<i class="fa-solid fa-gamepad"></i>',
'<i class="fa-solid fa-music"></i>',
'<i class="fa-solid fa-heart"></i>'
];

// Game variables
let cards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moveCount = 0;
let matchedPairs = 0;
let seconds = 0;
let minutes = 0;
let timerInterval = null;
let gameStarted = false;

// Start timer
function startTimer(){

    if(gameStarted) return;

    gameStarted = true;

    timerInterval = setInterval(()=>{

        seconds++;

        if(seconds === 60){
            minutes++;
            seconds = 0;
        }

        timer.textContent =
        `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;

    },1000);

}

// Stop timer
function stopTimer(){

    clearInterval(timerInterval);

}

// Shuffle array
function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

    return array;

}

// Create board
function createBoard(){

    gameBoard.innerHTML="";

    cards=[...icons,...icons];

    shuffle(cards);

    cards.forEach(icon=>{

        const card=document.createElement("div");

        card.className="memory-card";

        card.dataset.icon=icon;

        card.innerHTML=`
            <div class="card-face card-back">
                <i class="fa-solid fa-brain"></i>
            </div>
            <div class="card-face card-front">
                <div class="icon">${icon}</div>
            </div>
        `;

        card.addEventListener("click",flipCard);

        gameBoard.appendChild(card);

    });

}

// Reset game
function resetGame(){

    stopTimer();

    firstCard=null;
    secondCard=null;
    lockBoard=false;
    moveCount=0;
    matchedPairs=0;
    seconds=0;
    minutes=0;
    gameStarted=false;

    timer.textContent="00:00";
    moves.textContent="0";
    score.textContent="★★★";
    pairsFound.textContent="0 / 8 Pairs";

    popup.classList.remove("show");

    createBoard();

}

// Restart button
restartBtn.addEventListener("click",resetGame);

// Play again
playAgainBtn.addEventListener("click",resetGame);

// Start game
createBoard();

// Flip card
function flipCard(){

    if(lockBoard) return;

    if(this===firstCard) return;

    startTimer();

    this.classList.add("flip");

    if(!firstCard){

        firstCard=this;

        return;

    }

    secondCard=this;

    lockBoard=true;

    moveCount++;

    moves.textContent=moveCount;

    updateScore();

    checkMatch();

}

// Check match
function checkMatch(){

    if(firstCard.dataset.icon===secondCard.dataset.icon){

        matchCards();

    }else{

        unflipCards();

    }

}

// Match cards
function matchCards(){

    firstCard.classList.add("matched");

    secondCard.classList.add("matched");

    firstCard.removeEventListener("click",flipCard);

    secondCard.removeEventListener("click",flipCard);

    matchedPairs++;

    pairsFound.textContent=`${matchedPairs} / 8 Pairs`;

    resetTurn();

    if(matchedPairs===8){

        stopTimer();

        showPopup();

    }

}

// Wrong pair
function unflipCards(){

    setTimeout(()=>{

        firstCard.classList.remove("flip");

        secondCard.classList.remove("flip");

        resetTurn();

    },900);

}

// Reset turn
function resetTurn(){

    firstCard=null;

    secondCard=null;

    lockBoard=false;

}

// Update score
function updateScore(){

    if(moveCount<=12){

        score.textContent="★★★";

    }else if(moveCount<=18){

        score.textContent="★★☆";

    }else{

        score.textContent="★☆☆";

    }

}

// Disable board
function disableBoard(){

    lockBoard=true;

}

// Enable board
function enableBoard(){

    lockBoard=false;

}


// Show popup
function showPopup(){

    finalTime.textContent=timer.textContent;

    finalMoves.textContent=moveCount;

    finalScore.textContent=score.textContent;

    popup.classList.add("show");

    saveBestScore();

}

// Save best score
function saveBestScore(){

    const current={
        moves:moveCount,
        time:minutes*60+seconds
    };

    const best=JSON.parse(localStorage.getItem("memoryBestScore"));

    if(!best||current.moves<best.moves||(current.moves===best.moves&&current.time<best.time)){

        localStorage.setItem("memoryBestScore",JSON.stringify(current));

    }

}

// Close popup
popup.addEventListener("click",e=>{

    if(e.target===popup){

        popup.classList.remove("show");

    }

});

// Restart game
function restartGame(){

    stopTimer();

    clearInterval(timerInterval);

    firstCard=null;
    secondCard=null;
    lockBoard=false;

    moveCount=0;
    matchedPairs=0;

    seconds=0;
    minutes=0;

    gameStarted=false;

    timer.textContent="00:00";
    moves.textContent="0";
    score.textContent="★★★";
    pairsFound.textContent="0 / 8 Pairs";

    popup.classList.remove("show");

    createBoard();

}

// Restart button
restartBtn.addEventListener("click",restartGame);

// Play again button
playAgainBtn.addEventListener("click",restartGame);

// Prevent dragging
document.addEventListener("dragstart",e=>{

    e.preventDefault();

});

// Prevent double click selection
document.addEventListener("selectstart",e=>{

    e.preventDefault();

});

// Keyboard restart
document.addEventListener("keydown",e=>{

    if(e.key==="r"||e.key==="R"){

        restartGame();

    }

});

// Start game
restartGame();