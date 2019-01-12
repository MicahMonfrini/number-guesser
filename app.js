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
 // Check if number is correct
 if (guess === winningNum) {
   // Disable further input
   guessInput.disabled = true;
   // Green border
   guessInput.style.borderColor = 'green';
   // Display win message
   setMessage(`${winningNum} is correct. YOU WIN!`, 'green')
  // Number is incorrect
 } else {
   // Subtract 1 from remaining guesses
   guessesLeft -= -1
   // Red border
   guessInput.style.borderColor = 'red';
   // Display try again message
   setMessage(`Nope! ${guess} isn't the right number. Try again!`, 'red')
 }
});

// SET MESSAGE FUNCTION
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
};