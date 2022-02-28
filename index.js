const boards = [
    [
        0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
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
    ],
    [
        0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    ],
] 
// The three game screens
const splashScreen = document.querySelector('#splash-screen');
const gameScreen = document.querySelector('#game-screen');
const gameOverScreen = document.querySelector('#gameover-screen');
console.log("hello");
console.log(gameScreen);
//The start and restart buttons
const startBtn = document.querySelector("#start-btn");
const tryAgainBtn = document.querySelector("#try-again-btn");

//This is the actual game board
const gameBoard = document.querySelector("#game-board");

//for loop to create the squares
for (let i = 0; i < 180; i++) {
  let square = document.createElement("div");
  square.className = "square";
  square.id = `num${i}`;
  gameBoard.appendChild(square);
}


for (let i = 0; i < 180; i++) {

    let squareElement = document.querySelector("#num" + i);
    let countClicks = 0;

    squareElement.addEventListener("click", () => {
      if (boards[2][i] === 1) {
        squareElement.classList.add("hit");
        countClicks += 1;
        
      } else {
        squareElement.classList.add("miss");
        countClicks -= 1;
      }
      console.log(countClicks);
    });
}

window.addEventListener("load", () => {
gameScreen.style.display = "none";
gameOverScreen.style.display = "none";
  //start button event listener to start the game on click. Hide the other two screens and show the game screen
  startBtn.addEventListener("click", () => {
    splashScreen.style.display = "none";
    gameScreen.style.display = "block";
  });
});


// function printNum(){
//     let count = 0;
// for (let i = 0; i < 20; i++){
//     count += i;
//     return square.appendChild("${count}");
// }
// }




// for (let i = 0;i < boards.length; i++ ) {

//     for (let j = 0; j < 180; j++) {

//         let squareEle = document.querySelector("#num" + j);
//         squareEle.addEventListener("click", () => {
//             console.log("you clicked square number ", j);

//            if(boards[i][j] === 1){
//                squareEle.classList.add("hit");
//            } else {
//                squareEle.classList.add("fail");
//            }
//         });
//     }
// }
