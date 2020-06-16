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
    if (guessCount === 1) {
        guesses.textContent = '前回の予想: ';
    }

    //guesses.textContent += userGuess + ' ';
    guesses.innerText += userGuess + '　';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'おめでとう! 正解です!';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!ゲームオーバー!!!';
        setGameOver();
    } else {
        lastResult.textContent = '間違いです!';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'もう少し大きな数字です';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'もう少し小さな数字です';
        }
    }
    guessCount++;
    guessField.value = '';
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';

    document.body.appendChild(resetButton);

    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessField.disabled = false;
    guessSubmit.disabled = false;

    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    resetParas.forEach(function (element, index) {
        element.textContent = '';
    });

    resetButton.parentNode.removeChild(resetButton);
    //document.body.removeChild(resetButton);

    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
