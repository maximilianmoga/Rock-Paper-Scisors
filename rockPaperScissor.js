export default function checkResult(player, computer) {
    if (player === 'scissors' && computer === 'rock') return 'lose';

    if (player === 'rock' && computer === 'paper') return 'lose';

    if (player === 'paper' && computer === 'scissors') return 'lose';

    if (player === 'paper' && computer === 'rock') return 'win';

    if (player === 'scissors' && computer === 'paper') return 'win';

    if (player === 'rock' && computer === 'scissors') return 'win';


    if (player === 'paper' && computer === 'paper') return 'draw';

    if (player === 'scissors' && computer === 'scissors') return 'draw';

    if (player === 'rock' && computer === 'rock') return 'draw';
}