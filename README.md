# NaN & equality operators

Unlike all other possible values in JavaScript, it is not possible to rely on the equality operators (== and ===) to determine whether a value is NaN or not, because both NaN == NaN and NaN === NaN evaluate to false. Hence, the necessity of an isNaN function.

# "-=" shortcut

This shortcut can be used to substract a number from a variable without having to write the variable twice:

```javascript
guessesLeft -= -1;
```

vs

```javascript
guessesLeft = guessesLeft -1;
```
# How if/else statements are evaluated in a function

When a function with an if/else statement is called. the if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code in the function can be executed.

# The order of logic really matters

```javascript
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
```
In this block of code, the guessesLeft subtraction logic has to come before the check