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
// Variable to determine which part of the game the player is experiencing (0-play has not begun, 1-the computer creates and shows the pattern; the player selects choices, 2-player solution is tested)
let turn;
// Variable that holds the value of the player's success rate
let winPercentage;
let totalWins = 0;
let totalGames = 0;
  /*----- cached elements  -----*/
const playBtn = document.getElementById('play');
const submitBtn = document.getElementById('submit');
const compCircle = document.getElementById('computer');
const choicesNodeList = document.getElementsByClassName('choice');
const choicesArray = Array.from(choicesNodeList);
const resultMessage = document.querySelector('h4');
const playerBtnContainer = document.getElementById('player-buttons');
const bubblesNodeList = document.getElementsByClassName('player-bubble');
const bubblesArray = Array.from(bubblesNodeList);
const resetBtn = document.getElementById('reset');
const successRate = document.getElementById('success-rate')
  /*----- event listeners -----*/
// Event listener for the play button
playBtn.addEventListener('click', beginGame);
// Event listener for the buttons that allow the player to select a color pattern
playerBtnContainer.addEventListener('click', playerSelect);
// Event listener to check the correct solution versus the player's solution
submitBtn.addEventListener('click', checkWinner);
// Event listener to reset the game for a new player/sets winPercentage to 0
resetBtn.addEventListener('click', resetWinPercentage)
  /*----- functions -----*/
initialize();
// Function that initializes/resets the game 
function initialize() {
  turn = 0;
  correctPattern = [];
  playerPattern = [];
  winner = null;
  bubblesArray.forEach((bubble) => bubble.style.backgroundColor = 'white');
  render();
}
// Function that creates a pattern stored in the correct pattern variable
function makeCorrectPattern() {
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
//Callback function that begins the game and resets when invoked
function beginGame() {
  initialize()
  makeCorrectPattern();
  showCorrectPattern();
  turn += 1;
  render();
  setTimeout(() => {
    turn += 1;
    render();
  }, 5000)
}
// Function that updates the array holding the player's choices
function playerSelect(evt) {
  if (evt.target.innerText === 'Blue') {
    playerPattern.push(0);
  } else if (evt.target.innerText === 'Green') {
    playerPattern.push(1);
  } else if (evt.target.innerText === 'Orange') {
    playerPattern.push(2);
  } else if (evt.target.innerText === 'Pink') {
    playerPattern.push(3);
  } else if (evt.target.innerText === 'Red') {
    playerPattern.push(4);
  }
  render();
}
// Function that compares the correct pattern and player choices and declares a winner
function checkWinner() {
  if (playerPattern.length < 5) {
    return
  } else {
  playerPattern.forEach((num, idx) => {
    if (num === correctPattern[idx]) {
      winner = 1;
    } else {
      winner = -1;
    }
  })
  turn += 1;
  calculateWinPercentage();
  render();
}
}
// Function that determines win percentage
function calculateWinPercentage() {
  if (winner === 1) {
    totalWins += 1;
    totalGames += 1;
  } else if (winner === -1) {
    totalGames +=1;
  }
  winPercentage = (Math.round((totalWins / totalGames) * 100))
}
// Function that resets the win percentage
function resetWinPercentage() {
  winPercentage = null;
  totalGames = 0;
  totalWins = 0;
  initialize();
}
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
  bubblesArray.forEach((bubble, idx) => {
    bubble.style.backgroundColor = colors[playerPattern[idx]];
})
};
// Render controls function
function renderControls() {
  if (turn === 0) {
  playBtn.style.visibility = 'visible';
  submitBtn.style.visibility = 'hidden';
  choicesArray.forEach((choice) => choice.style.visibility = 'hidden');
  resetBtn.style.visibility = 'hidden';
} else if (turn === 1) {
  playBtn.style.visibility = 'hidden';
} else if (turn === 2) {
  submitBtn.style.visibility = 'visible';
  choicesArray.forEach((choice) => choice.style.visibility = 'visible');
} else if (turn === 3) {
  playBtn.style.visibility = 'visible';
  submitBtn.style.visibility = 'hidden';
  resetBtn.style.visibility = 'visible';
}
}
// Render message function
function renderMessage() {
  resultMessage.innerHTML = '<h4>Hello, my name is S.I.M.O.N. Please examine the color of the large circle below very carefully.<br> My pattern recognition software seeks to determine your mental acuity in remembering sequences. <br>When the color cycle is complete, you will recreate the pattern yourself in the space provided. Press play to begin!</h4>'
  if (winner === null && turn > 0) {
  resultMessage.innerText = 'Awaiting Test Results...';
  resultMessage.style.fontSize = '1.5rem'
} else if (winner === 1) {
  resultMessage.innerText = 'Congratulations! Your brain is closer to perfection than most!'
  resultMessage.style.fontSize = '1rem';
} else if (winner === -1) {
  resultMessage.innerText = "Hmmmmm, my algorithm expected an alternative response, Please try again!"
}
  if (winPercentage) {
    successRate.innerText = `Success Rate: ${winPercentage}%`
  } else {
    successRate.innerText = '';
  }
};