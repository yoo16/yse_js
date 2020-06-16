let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    let userGuess = Number(guessField.value);

    //guesses.textContent += userGuess + ' ';
    guesses.innerText += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'おめでとう! 正解です!';
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!ゲームオーバー!!!';
    } else {
        lastResult.textContent = '間違いです!';
    }
    guessCount++;
}

function setGameOver() {
}

function resetGame() {
}
