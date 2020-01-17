export default function getThrowFromNumber(number) {
    if(number ===0) return 'rock';
    if(number ===1) return 'paper';
    if(number ===2) return 'scissiors';

}
export function getRandomNumber() {
    const getRandomNumber = Math.round(Math.random() * 3)
    return getThrowFromNumber(getRandomNumber);
}