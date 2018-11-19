# Psychic Game

Test your psychic abilities! The User has (lucky number) 7 tries to correctly guess the letter that the Computer is "thinking."

### Live Page: [Link](https://kmalillos.github.io/Psychic-Game/)

![Image](https://github.com/kmalillos/Psychic-Game/blob/master/assets/images/ReadMe-pic.JPG)

## How It Works

* At the start of each round, the Computer randomly chooses a letter. 
* The User tries to guess the Computer's letter by pressing on any letter key from 'a' to 'z.'
* The letters selected by the User shows up in 'Letters Guessed' for up to 7 times (the number of guesses the User has to select the Computer's letter).
* When the User correcly guesses the letter, the User wins by 1 point.
* When the User incorrectly guesses the letter, the 'Number of Guesses' decreases by 1. 
* When the User runs out of guesses, the User loses by 1 point.
* The game restarts once the User wins or loses.

**Sample Demo:** [Link](https://www.youtube.com/watch?v=qTc45Lox97g&feature=youtu.be)

## Developer Notes

### Built With:
* CSS
* JavaScript

### CSS:

* CSS Reset from Meyer Web ([Link](http://meyerweb.com/eric/tools/css/reset/)) is used to reset the default styling of all HTML elements to a consistent baseline in order to better customize CSS
* Background Image from PixaVay ([Link](https://pixabay.com/))

### Javascript:

* Created *global variables* to store values
* Note: *Variable* 'numberGuesses' is equal to 7 to represent the number of guesses that the User has

![Image](https://github.com/kmalillos/Psychic-Game/blob/master/assets/images/ReadMe-1.JPG)

* *Function* 'randomLetterChoice' returns to the *variable* 'computerChoice' a random index from the *array* 'letters' (global variable)
* *Function* 'resetGame' sets *variable* 'numberGuesses' and *array* 'lettersGuessed' to global variable settings. Then, it calls the *function* 'randomLetterChoice' which resets the *variable* 'computerChoice'. 

![Image](https://github.com/kmalillos/Psychic-Game/blob/master/assets/images/ReadMe-2.JPG)

* Upon page load, the computer randomly selects a letter when the *function* 'randomLetterChoice' is called
* The game is triggered by the *event* 'onkeyup' (the event that occurs when the User releases a key on the keyboard)
* *Variable* 'userGuess' is the captured by the 'event.key' (the key on the keyboard the User releases captured by *event*). Note: The 'userGuess' is updated each time a key is released. 
* To streamline the process, the built-in JavaScript function 'toLowerCase()' is used to change all keys selected to lowercase because the computer recognizes a lowercase and an uppercase of the same letter as different letter (i.e. 'a' and 'A' are different choices). 

![Image](https://github.com/kmalillos/Psychic-Game/blob/master/assets/images/ReadMe-3.JPG)

* *If-else statement*: If *variable* 'userGuess' exists in the *array* 'letters' (which contains letters from 'a' to 'z'), the game continues that include other *if statements* (described below). 
* Otherwise, if the *variable* 'userGuess' is not a letter, the User gets an alert to remind the user to select a letter.
* If the 'userGuess' does not select the 'computerChoice', then the number of guesses stored in the *variable* 'numberGuesses' decreases by 1 and the 'userGuess' is added to (or "pushed") to the *array* 'letterGuessed', which stores and displays the User's keys guessed. 
* If the 'userGuess' selects the 'computerChoice', the User gets an alert of the Computer's letter and the number of wins stored in the *variable* 'wins' increases by 1 to represent each game won.
* When the the *variable* numberGuesses reaches 0, the User gets an alert of the Computer's letter and the number of losses stored in the *variable* 'losses' increases by 1 to represent each game lost.
* Note: When the *function* 'resetGame' is called, the *variables* 'wins' and 'loses' are not reset to keep track of the users points. 

![Image](https://github.com/kmalillos/Psychic-Game/blob/master/assets/images/ReadMe-4.JPG)

* Vanilla JavaScript used to dynamically 'getElementbyId' of HTML elements to create text content. 
* This is triggered when the game begins (on *event* 'onkeyup') to keep style the clean before game begins.

![Image](https://github.com/kmalillos/Psychic-Game/blob/master/assets/images/ReadMe-5.JPG)

## Contributor

### Kaylah Malillos

**About the Developer:** [Link](https://kmalillos.github.io/)