# Psychic-Game

Test your psychic abilities! The User has (lucky number) 7 tries to correctly guess the letter that the Computer is "thinking."

### Try it out! Live Page: [Link](https://kmalillos.github.io/Psychic-Game/)

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

**Built With**
* CSS
* JavaScript

### CSS:

* **CSS Reset** from Meyer Web [Link](http://meyerweb.com/eric/tools/css/reset/) (public domain license) is used to reset the default styling of all HTML elements to a consistent baseline in order to better customize CSS

* Background Image from PixaVay [Link](https://pixabay.com/) 

### Javascript:

* Created *global variables* to store values

![Image](https://github.com/kmalillos/Psychic-Game/blob/master/assets/images/ReadMe-1.JPG)

* Created *functions*
* The *function* 'randomLetterChoice' returns to the *variable* 'computerChoice' a random index from the *array* 'letters' (global variable)
* The *function* 'resetGame' sets *variable* 'numberGuesses' equal to 7 to reset the number of User guesss; empties *array* 'lettersGuessed' to clear letters guessed by User; and calls *function* 'randomLetterChoice' to select a new random lettter.

![Image](https://github.com/kmalillos/Psychic-Game/blob/master/assets/images/ReadMe-2.JPG)

* Upon page load, the computer randomly selects a letter when the *function* 'randomLetterChoice' is called
* The game is triggered by the *event* 'onkeyup' (the event that occurs when the User releases a key on the keyboard)
* *Variable* 'userGuess' is the captured by the 'event.key' (the key on the keyboard the User releases captured by *event*)

![Image](https://github.com/kmalillos/Psychic-Game/blob/master/assets/images/ReadMe-3.JPG)

* *If-else statement*: If *variable* 'userGuess' exists in the *array* 'letters' (which contains letter from 'a' to 'z'), the game continues in another *if-else statement* (described below). Otherwise, if the *variable* 'userGuess' is not a letter, the User gets an alert to remind the user to select a letter.

* 
![Image](https://github.com/kmalillos/Psychic-Game/blob/master/assets/images/ReadMe-4.JPG)

* Vanilla JavaScript used to dynamically access HTML elements to show text. 

![Image](https://github.com/kmalillos/Psychic-Game/blob/master/assets/images/ReadMe-5.JPG)

## Contributor

**Kaylah Malillos**

More about Kaylah: [Link](https://kmalillos.github.io/)

