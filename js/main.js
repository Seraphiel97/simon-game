  /*----- constants -----*/
// Constant to hold the colors the computer selects from
const colors = {
  0: '#55CBCD',
  1: '#97C1A9',
  2: '#FFC8A2',
  3: '#F3B0C3',
  4: '#b40839',
};

  /*----- state variables -----*/
// Variable(array) to hold the master pattern
let correctPattern;

// Variable(array) to hold the player's pattern
let playerPattern;

// Winner variable set to null
let winner;

// Variable to determine which part of the game the player is experiencing (0-play has not begun, 1-the computer creates and shows the pattern, 2-the player selects choices, 3-player solution is tested)
let turn;

  /*----- cached elements  -----*/
const play = document.getElementById('play');
const restart = document.getElementById('restart');
const compCircle = document.getElementById('computer');
const choicesNodeList = document.getElementsByClassName('choice');
const choicesArray = Array.from(choicesNodeList);

  /*----- event listeners -----*/
// Create an event listener for the play button
play.addEventListener('click', beginGame);
// Create an event listener for the play again/reset button
restart.addEventListener('click', beginGame);
// Create an event listener for the buttons that allow the player to select a color pattern

  /*----- functions -----*/
initialize();
// Function that initializes/resets the game 
function initialize() {
  turn = 0;
  render();
}

// Function that creates a pattern stored in the correct pattern variable
function makeCorrectPattern() {
  correctPattern = [];
  for (let i = 0; i < 5; i++) {
    correctPattern.push(Math.floor(Math.random() * 5));
  }
}

// Function that iterates through the array, showing the colors to the player
function showCorrectPattern() {
  correctPattern.forEach((num, idx) => {
    setTimeout(() => {
      compCircle.style.backgroundColor = colors[num];
      compCircle.innerText = idx + 1;
    }, idx * 1000)
  })
  setTimeout(() => compCircle.style.backgroundColor = 'white', 5000);
}

function beginGame() {
  makeCorrectPattern();
  showCorrectPattern();
  turn += 1;
  render();
}

// Function that updates the array holding the player's choices

// Function that compares the master pattern and player choices and declares a winner



// Main render function
function render() {
  renderBoard();
  renderControls();
  renderMessage();
};
// Render board function
function renderBoard() {
  choicesArray.forEach((choice, idx) => {
    choice.style.color = colors[idx];
    choice.style.borderStyle = 'solid';
    choice.style.borderColor = colors[idx];
  })
};
// Render controls function
function renderControls() {
if (turn === 0) {
  play.style.visibility = 'visible';
  restart.style.visibility = 'hidden';
  choicesArray.forEach((choice) => choice.style.visibility = 'hidden');
} else if (turn === 1) {
  play.style.visibility = 'hidden';
  choicesArray.forEach((choice) => choice.style.visibility = 'visible');
} else if (turn === 2) {
  play.style.visibility = 'hidden';
  restart.style.visibility = 'visible';
};
}
// Render message function
function renderMessage() {

};