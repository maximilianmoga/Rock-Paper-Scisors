const areYouSure = document.getElementById('are-you-sure')
const resultDisplay = document.getElementById('result-display')
const computerChoice = getThrowFromNumber();
const result = checkResult(userChoice, computerChoice);
console.log('user', userChoice);
console.log('computer', computerChoice);
console.log('result');


function getThrowFromNumber(number) {
    if(number === 0) 'rock';
    if(number === 1) 'paper';
    if(number === 2) 'scissors';
    if(number ===0) return 'rock';
    if(number ===1) return 'paper';
    if(number ===2) return 'scissiors';

}







areYouSure.addEventListener('click', () => {
    console.log('areyousure')
});    