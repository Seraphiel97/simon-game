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

  /*----- cached elements  -----*/
const restart = document.getElementById('restart');
const compCircle = document.getElementById('computer');
  /*----- event listeners -----*/
// Create an event listener for the play button
// Create an event listener for the play again/reset button
restart.addEventListener('click', initialize);
// Create an event listener for the buttons that allow the player to select a color pattern

  /*----- functions -----*/
initialize();

// Function that initializes/resets the game 
function initialize() {
  makeCorrectPattern();

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
  correctPattern.forEach((num) => {
    setTimeout(() => {
      compCircle.style.backgroundColor = colors[num];
    }, 1000)
  })
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

};
// Render controls function
function renderControls() {

};
// Render message function
function renderMessage() {

};