/* Imports */

/* State */
let gameState = 'guess'; // 'guess' or 'result'
let userThrow = 'rock'; // 'rock' or 'paper' or 'scissors'

const rock = document.getElementById('guess-rock');

/* Actions */
function loadPage() {}

/* Components */

/* Component */
// get DOM
// display
//not working yet. just hide results for now.
function displayResult() {
    if (gameState === 'guess') {
        results.classList.add('hidden');
    } else {
        results.classList.remove('hidden');
    }
}

// DOM
//const results = document.getElementById('results');

// event listeners
//working :)
rock.addEventListener('click', () => {
    rock.classList.add('throwhand');
});

/* Run page load code */
loadPage();
