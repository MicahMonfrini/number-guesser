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
    return;
  } 
  // Number is correct 
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct. YOU WIN!`);
  // Number is incorrect
  } else {
    // Remove a guess
    guessesLeft -= 1;
    // No more guesses
    if (guessesLeft === 0) {
      gameOver(false, `You're all out of guesses! The correct number was ${winningNum}.`);
    // Guesses remain
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
  // Declare color variable
  let color;
  won === true ? color = 'green' : 'red';
  // Disable input when game is over
  guessInput.disabled = true;
  // Set border color
  guessInput.style.borderColor = color;
  // Set message
  setMessage(msg, color);
  // Play again prompt
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
};

// SET MESSAGE FUNCTION
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
};