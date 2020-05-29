
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

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'おめでとう! 正解です!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!ゲームオーバー!!!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = '間違いです!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = '今の予想は小さすぎです!もっと大きな数字です。';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = '今の予想は大きすぎです!もっと小さな数字です。';
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
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    // for (let i = 0; i < resetParas.length; i++) {
    //     resetParas[i].textContent = '';
    // }

    resetParas.forEach(function(element, index) {
        element.textContent = '';
    });

    resetButton.parentNode.removeChild(resetButton);
    //document.body.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;

    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
