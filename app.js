/* Imports */

/* State */
let gameState = 'guess'; // 'guess' or 'result'
let guess = ''; // rock paper or scissors
let compGuess = 'scissors';
let result = '';

/* Actions */
function loadPage() {}

/* Components */

// get DOM

// display
function displayResult() {
    if (gameState === 'results') {
        resultsSection.classList.remove('hidden');
    }
    /* if (guess === 'rock') {
        paper.classList.add('hidden');
        scissors.classList.add('hidden');
    } else if (guess === 'paper') {
        rock.classList.add('hidden');
        scissors.classList.add('hidden');
    } else if (guess === 'scissors') {
        rock.classList.add('hidden');
        paper.classList.add('hidden');
    } */
}

function makePlay(playerChoice) {
    guess = playerChoice;
    displayResult();
}

/* function compPlay() {
    const randHand; 
} */

// DOM
const rock = document.getElementById('guess-rock');
const paper = document.getElementById('guess-paper');
const scissors = document.getElementById('guess-scissors');

const resultsSection = document.getElementById('results-section');

function renderCompGuess() {
    if (compGuess === 'scissors') {
        scissors.classList.add('comphand');
    }
}

// event listeners
rock.addEventListener('click', () => {
    rock.classList.add('throwhand');
    guess = 'rock';
    makePlay(guess);
    renderCompGuess();
});
paper.addEventListener('click', () => {
    paper.classList.add('throwhand');
    guess = 'paper';
    makePlay(guess);
});
scissors.addEventListener('click', () => {
    scissors.classList.add('throwhand');
    guess = 'scissors';
    makePlay(guess);
});

/* Run page load code */
loadPage();
displayResult();
