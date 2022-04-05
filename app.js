const puzzleEl = document.querySelector("#puzzle");
const guessEl = document.querySelector("#guesses");

const game1 = new Hangman("sothatna", 5);

puzzleEl.textContent = game1.getPuzzle;
guessEl.textContent = game1.getStatusMessage;


window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.getPuzzle;
  guessEl.textContent = game1.getStatusMessage;
});
