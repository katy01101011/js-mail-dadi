const dice = [
    '<i class="fas fa-dice-one"></i>',
    '<i class="fas fa-dice-two"></i>',
    '<i class="fas fa-dice-three"></i>',
    '<i class="fas fa-dice-four"></i>',
    '<i class="fas fa-dice-five"></i>',
    '<i class="fas fa-dice-six"></i>'
]

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const play = document.querySelector('button');
console.log(play);
play.addEventListener('click', function() {
    const playerNumber = Math.floor(Math.random() * 6) + 1;
    console.log(playerNumber);
    
    const botNumber = Math.floor(Math.random() * 6) + 1;
    console.log(botNumber);

    for (let i = 0; i < dice.length; i++) {

        document.querySelector('#player>h1').innerHTML = 'Tu:';

        if (playerNumber === i) {
            document.getElementById('player-number').innerHTML = dice[i - 1];
        } else if (playerNumber === i+1) {
            document.getElementById('player-number').innerHTML = dice[dice.length - 1];
        }

        document.querySelector('#bot>h1').innerHTML = 'Il computer:';

        if (botNumber === i) {
            document.getElementById('bot-number').innerHTML = dice[i - 1];
        } else if (botNumber === i+1) {
            document.getElementById('bot-number').innerHTML = dice[dice.length - 1];
        }
    }

    // Stabilire il vincitore, in base a chi fa il punteggio più alto.
    if (playerNumber < botNumber) {
        console.log('Hai perso');
        document.getElementById('result').innerHTML = '<i class="fas fa-sad-cry"></i> Hai perso <i class="fas fa-sad-cry"></i>';
    } else if (playerNumber > botNumber) {
        console.log('Hai vinto');
        document.getElementById('result').innerHTML = '<i class="fas fa-glass-cheers"></i> Hai vinto!!! <i class="fas fa-glass-cheers"></i>';
    } else {
        console.log('Siete pari');
        document.getElementById('result').innerHTML = '<i class="fas fa-shoe-prints"></i> Siete pari <i class="fas fa-shoe-prints"></i>';
    }
});