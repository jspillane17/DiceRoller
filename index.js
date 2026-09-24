const MAX_DICE = 99999;
const numDiceInput = document.getElementById("numDiceInput");
const diceImages = document.getElementById("diceImages");
function roll() {
    const numDice = (numDiceInput.value > MAX_DICE) ? MAX_DICE : numDiceInput.value;
    const images = [];
    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        images.push(`<img src="dice_images/dice${roll}.png" alt="Dice ${roll}">`);
    }
    console.log(`Rolled ${numDice} Dice`);
    diceImages.innerHTML = images.join(' ');
}