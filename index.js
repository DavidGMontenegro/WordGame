let username = 'player1';

function nameChanged(val) {
    if (val.length < 2)
        alert("Invalid name. Minimun 2 characters.");
    else
        username = val;
}

function guessButton_Click(){
    if (username == 'player1')
        alert("Continue with default name? (player1)");

    location.href="guess.html";

}

function talkButton_Click(){
    if (username == 'player1')
        alert("Continue with default name? (player1)");
}