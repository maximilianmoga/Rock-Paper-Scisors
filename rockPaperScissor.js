export default function checkResult(player, computer) {
    if(player === 'rock' && computer === 'scissors') return 'win' 
   
    if(player === 'scissors' && computer === 'paper') return 'win'

}