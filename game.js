import checkResult from '../rockPaperScissor.js';
import getThrowFromNumber from '../game2.js';


const button = document.getElementById('button');

const reset = document.getElementById('reset');

const wins = document.getElementById('wins');

const losses = document.getElementById('losses');

const draws = document.getElementById('draws');

const rock = document.getElementById('rock');

const paper = document.getElementById('paper');

const scissors = document.getElementById('scissors');

const resultDisplay = document.getElementById('result-display');

// add the rest of your DOM elements


button.addEventListener('click', () => {
    console.log('areyousure')

    const computerChoice = getThrowFromNumber();
    const result = checkResult(player, computer);


    console.log('user', userChoice);
    console.log('computer', computerChoice);
    console.log('result');

});


    
reset.addEventListener('click' , () => {

    
});    