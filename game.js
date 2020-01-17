import checkResult from '../rockPaperScissor.js';
import getThrowFromNumber from '../game2.js';


const areYouSure = document.getElementById('are-you-sure');

const resultDisplay = document.getElementById('result-display');

// add the rest of your DOM elements


areYouSure.addEventListener('click', () => {
    console.log('areyousure')

    const computerChoice = getThrowFromNumber();
    const result = checkResult(player, computer);


    console.log('user', userChoice);
    console.log('computer', computerChoice);
    console.log('result');

});


    
reset.addEventListener('click' , () => {

    
});    