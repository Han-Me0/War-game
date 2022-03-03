const boards = [
    [
        0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    ],
    [
        0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    ],
    [
        0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,
        0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,
        0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,
        0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    ],
] 
// The three game screens

let countClicks = 0;
let hits = 0;
let misses = 0;

const splashScreen = document.querySelector('#splash-screen');
const gameScreen = document.querySelector('#game-screen');
const gameOverScreen = document.querySelector('#gameover-screen');
const Scores = document.querySelector('#scores');
const miss = document.querySelector('#misses');
const hit = document.querySelector('#hits');
const reset = document.querySelector("#gameOver-TryAgain");

let hitSound = new Audio("./exp.mp3")
hitSound.volume = .1;
let missSound = new Audio("./16247_1460569611.mp3")
missSound.volume = .1;
let airTrack = new Audio("./Air.m4a");
airTrack.volume = .1;
let planeSound = new Audio("./plane.mp3");
planeSound.volume = .1;

let randomBoard = Math.floor(Math.random() * boards.length); 
//The start and restart buttons
const startBtn = document.querySelector("#start-btn");
const tryAgainBtn = document.querySelector("#try-again-btn");

//This is the actual game board
const gameBoard = document.querySelector("#game-board");


//for loop to create the squares
for (let i = 0; i < 220; i++) {
  let square = document.createElement("div");
  square.className = "square";
  square.id = `num${i}`;
  gameBoard.appendChild(square);
}

//function to check and then remove the transition
function removeTransition(e) {
  // check if the key is actually transforming and if not then skip it
  if (e.propertyName !== "transform") return;
  this.classList.remove("trans");
}
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("transitionend", removeTransition);
});
for (let i = 0; i < 220; i++) {

  let squareElement = document.querySelector("#num" + i);
  squareElement.addEventListener("click", () => {
    if (boards[randomBoard][i] === 1) {
      squareElement.classList.add("hit");
      squareElement.classList.add("trans");
      
      countClicks += 1;
      
      hits += 1; 
      hitSound.play();
      Scores.innerText = countClicks;
      hit.innerText = hits;
  
    } else {
      squareElement.classList.add("miss");
      countClicks -= 1;
      
      misses += 1;
      missSound.play();
      planeSound.play();
      miss.innerText = misses;
    if( misses === 5){
      gameScreen.style.display = "none";
      gameOverScreen.style.display = "block";
      splashScreen.style.display = "none";
    }
      Scores.innerText = countClicks;
  
    }
  });
    console.log(countClicks);
    
  }


window.addEventListener("load", () => {
gameScreen.style.display = "none";
gameOverScreen.style.display = "none";
let planeSound = new Audio("./plane.mp3");
planeSound.volume = .1;
planeSound.play();
  //start button event listener to start the game on click. Hide the other two screens and show the game screen
  startBtn.addEventListener("click", () => {
    splashScreen.style.display = "none";
    gameScreen.style.display = "block";
    airTrack.play();
  });

  tryAgainBtn.addEventListener("click", () => {
    splashScreen.style.display = "none";
    gameScreen.style.display = "block";
    airTrack.play();
    planeSound.play();
    randomBoard = Math.floor(Math.random() * boards.length);
    miss.innerText = '0';
       hit.innerText = '0';
       hits = 0;
       misses = 0;
       for (let i = 0; i < 220; i++){
         let squareElement = document.querySelector("#num" + i);
       
            squareElement.classList.remove("hit");
            squareElement.classList.remove("miss");
            squareElement.classList.remove("trans");
       
     }
  });

  reset.addEventListener("click", () => {
    splashScreen.style.display = "none";
    gameScreen.style.display = "block";
    gameOverScreen.style.display = "none";
   hits = 0;
   misses = 0;
   airTrack.play();
   planeSound.play();
    miss.innerText = '0';
    hit.innerText = '0';
    for (let i = 0; i < 220; i++){
    let squareElement = document.querySelector("#num" + i);
    
         squareElement.classList.remove("hit");
         squareElement.classList.remove("miss");
  }
    randomBoard = Math.floor(Math.random() * boards.length);
   
});

 });


