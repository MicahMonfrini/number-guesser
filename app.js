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

// Guess button event listner
guessBtn.addEventListener('click', () => {
 let guess = parseInt(guessInput.value);
 // Validate input is a number within acceptable range
 if (guess === Nan || guess < 1 || guess > 10) {
  alert('Your guess must be a number between 1 and 10!')
 }
});