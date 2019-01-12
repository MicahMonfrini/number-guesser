// GAME VALUES
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI ELEMENTS
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// Add min/max to UI
minNum.textContent = min;
maxNum.textContent = max;

// EVENT LISTENER FOR GUESS INPUT
guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value);
  // Validate input is a number within acceptable range
  if (isNaN(guess) || guess < 1 || guess > 10) {
    setMessage(`Please enter a number between ${min} and ${max}!`, 'red');
  } 
  // Number is correct 
  if (guess === winningNum) {
    // Disable further input
    guessInput.disabled = true;
    // Green border
    guessInput.style.borderColor = 'green';
    // Display win message
    setMessage(`${winningNum} is correct. YOU WIN!`, 'green')
  // Number is incorrect
  } else {
    // Remove a guess
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Disable further input
      guessInput.disabled = true;
      // red border
      guessInput.style.borderColor = 'red';
      // Game over message
      setMessage(`You're all out of guesses! The correct answer was ${winningNum}.`, 'red');
      // Number is incorrect - guesses remain
    } else {
      // Red border
      guessInput.style.borderColor = 'red';
      // Clear input field
      guessInput.value = '';
      // Try again message
      setMessage(`That's not the right number. You have ${guessesLeft} guesses left.`, 'red');
    }
  }
});

// GAME OVER FUNCTION

function gameOver(won, msg) {
  // Disable input when game is over
  guessInput.disabled = true;
  // Win logic
  if (won === true && msg === 'win'){
    // Green border
    guessInput.style.borderColor = 'green';
    // Display win message
    setMessage(`${winningNum} is correct. YOU WIN!`, 'green')
  }

  if (won === false && msg === 'lose') {
    // Green border
    guessInput.style.borderColor = 'red';
    // Display win message
    setMessage(`${winningNum} is correct. YOU WIN!`, 'green')
  }

};

// SET MESSAGE FUNCTION
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
};