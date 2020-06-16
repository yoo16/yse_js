let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const autoGuessButton  = document.querySelector('#auto_guess_button');
const autoAnswer  = document.querySelector('#auto_answer');
const autoGuessCount  = document.querySelector('#auto_guess_count');
const answerField  = document.querySelector('#answer');

let guessCount = 1;
let resetButton;

guessSubmit.addEventListener('click', checkGuess);

autoGuessButton.addEventListener('click', autoGuess);

function autoGuess() {
    guessCount = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    answerField.innerHTML = randomNumber;
    autoAnswer.textContent = ''

    let start = 1;
    let end = 100;
    let answers = [];

    while (guessCount < 10) {
        let answer = parseInt((start + end) * 0.5);
        //console.log(answer)
        autoAnswer.innerHTML = answer;
        answers.push(answer);

        if (answer == randomNumber) {
            break;
        } else if (answer > randomNumber) {
            end = answer;
        } else {
            start = answer;
        }
        guessCount++;
    }
    autoAnswer.innerText = answers.join(' ');
    autoGuessCount.textContent = guessCount;
}

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
