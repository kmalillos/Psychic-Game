// --- Variables ---

var computerChoice = "";
var userGuess = "";
var numberGuesses = 7;
var lettersGuessed = [];
var wins = 0;
var losses = 0;

var letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// --- Functions ---
    
function randomLetterChoice() {
    return computerChoice = letters[Math.floor(Math.random()*letters.length)];
} 

function resetGame () {
    numberGuesses=7;
    lettersGuessed=[];
    randomLetterChoice();
}

// --- Main Process ---

// CALL function to SELECT random letter
randomLetterChoice();
    // console.log("Computer Letter: " + computerChoice);

// user to SELECT letter via onkeyup
document.onkeyup = function (event) {
    
    var userGuess = event.key.toLowerCase();
        console.log("Computer Letter: " + computerChoice);
        console.log("User Guess: " + userGuess);
        
        // userGuess is VALID if key in letters array
    if (letters.indexOf(userGuess.toLowerCase()) !== -1) {
        
        // user guesses incorrectly
        if (userGuess !== computerChoice) {
            numberGuesses--;
                console.log("Number Guesses: " + numberGuesses);
            lettersGuessed.push(userGuess);
                console.log(lettersGuessed);

        // user guesses correctly
        } if (userGuess === computerChoice) {
            alert("You're psychic! You correctly guessed the letter '" + computerChoice + "'!");
            wins++;
                console.log("Wins: " + wins);
            resetGame();

        // user runs out of guesses
        } if (numberGuesses === 0) {
            
            alert("You're not psychic. The letter was '" +  computerChoice + "'. Try again!");
            losses++;
                console.log("Losses: " + losses);
            resetGame();
        }
    }

    // userGuess is NOT VALID if key in letters array  
    else {
    alert("Press any letter key from A to Z to play!");
    }

    // --- Access HTML Elements ---
    document.getElementById("number-text").textContent = "Guesses Remaining: " + numberGuesses;
    document.getElementById("letters-text").textContent = "Letters Guessed: " + lettersGuessed;
    document.getElementById("wins-text").textContent = "Wins: " + wins;
    document.getElementById("losses-text").textContent = "Losses: " + losses; 
    
};  
