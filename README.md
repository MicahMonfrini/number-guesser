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
