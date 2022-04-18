// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.


const dice = [
    '<i class="fas fa-dice-one"></i>',
    '<i class="fas fa-dice-two"></i>',
    '<i class="fas fa-dice-three"></i>',
    '<i class="fas fa-dice-four"></i>',
    '<i class="fas fa-dice-five"></i>',
    '<i class="fas fa-dice-six"></i>'
]

// document.querySelector('h1').innerHTML = '<i class="fas fa-dice-one"></i>';

// Stabilire il vincitore, in base a chi fa il punteggio più alto.


const play = document.querySelector('button');
console.log(play);
play.addEventListener('click', function() {
    const playerNumber = Math.floor(Math.random() * 6) + 1;
    console.log(playerNumber);
    
    const botNumber = Math.floor(Math.random() * 6) + 1;
    console.log(botNumber);

    for (let i = 0; i < dice.length; i++) {

        if (playerNumber === i) {
            document.getElementById('player-number').innerHTML = `Hai lanciato un <br> ${dice[i - 1]}`;
        } else if (playerNumber === 6) {
            document.getElementById('player-number').innerHTML = `Hai lanciato un <br> ${dice[5]}`;
        }
    }

    for (let i = 0; i < dice.length; i++) {
        if (botNumber === i) {
            document.getElementById('bot-number').innerHTML = `Il computer ha lanciato un <br> ${dice[i - 1]}`;
        } else if (playerNumber === 6) {
            document.getElementById('bot-number').innerHTML = `Il computer ha lanciato un <br> ${dice[5]}`;
        }
    }

    if (playerNumber < botNumber) {
        console.log('Hai perso');
    } else if (playerNumber > botNumber) {
        console.log('Hai vinto');
    } else {
        console.log('Siete pari');
    }
});

