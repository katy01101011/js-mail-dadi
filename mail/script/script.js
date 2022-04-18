const loginMails = [
    'ciao@gmail.com',
    'pinco@gmail.com',
    'pallino@gmail.com'
];

// Chiedi all’utente la sua email
let userMail = prompt('Inserisci la tua email')
console.log(userMail);

// Controlla che sia nella lista di chi può accedere
let result = false;

for (let i = 0; i < loginMails.length; i++) {
    const email = loginMails[i];
    console.log(email);
    if (userMail === loginMails[i]) {
        result = true;
        console.log(result);
    }
}

// Stampa un messaggio appropriato sull’esito del controllo
if (result === true) {
    const answer = document.createElement('h1');
    answer.innerHTML = 'Accesso consentito';
    document.body.appendChild(answer);
    answer.classList.add('green');

} else {
    const answer = document.createElement('h1');
    answer.innerHTML = 'Accesso negato';
    document.body.appendChild(answer);
    answer.classList.add('red');
}