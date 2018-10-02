var numberGuesses = 0;
var lettersGuessed = [];
var wins = 0;
var losses = 0;
var psychicLetter = "";
var userGuess = "";

var letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

function resetGame () {
    numberGuesses=0;
    lettersGuessed=[];
    psychicLetter="";
}

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    var psychicLetter = letters[Math.floor(Math.random()*letters.length)];

    // if userGuess is not NOT (double-negative means it IS) in the letters[], game continues
    if (letters.indexOf(userGuess.toLowerCase()) !== -1) {
        
        if (userGuess === psychicLetter) {
            wins++;
            alert("Awesome! You correctly guessed the letter: " + psychicLetter + "! You're psychic!");
        } else {
            losses++;
            alert("Sorry, you're not psychic. You picked: " + userGuess + ". The letter was: " + psychicLetter + ". Try again!");
        }

        // access HTML elements
        document.getElementById("wins-text").textContent = "Wins: " + wins;
        document.getElementById("losses-text").textContent = "Losses: " + losses; 

    } else {
        alert("Press any letter key from A to Z to play!");
        resetGame();
    }
}

