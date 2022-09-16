/* Imports */

/* State */
let gameState = 'guess'; // 'guess' or 'result'
let userThrow = 'rock'; // 'rock' or 'paper' or 'scissors'

/* Actions */
function loadPage() {}

/* Components */

/* Component */
// get DOM
// display
//not working yet. just hide results for now.
function displayResult() {
    if (gameState === 'guess') {
        resultsSection.classList.add('hidden');
    }
}

// DOM
const rock = document.getElementById('guess-rock');
const paper = document.getElementById('guess-paper');
const scissors = document.getElementById('guess-scissors');

const resultsSection = document.getElementById('results-section');

// event listeners
rock.addEventListener('click', () => {
    rock.classList.add('throwhand');
});
paper.addEventListener('click', () => {
    paper.classList.add('throwhand');
});
scissors.addEventListener('click', () => {
    scissors.classList.add('throwhand');
});

/* Run page load code */
loadPage();
displayResult();
