var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "i", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];





var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

document.onkeyup = function (event) {
    var userChoice = event.key;

    console.log(userChoice);
    if (userChoice === computerGuess) {

        wins = wins + 1;
        guessesLeft = 10;
        guesses = [];

    }
    if (userChoice !== computerGuess)  {
        guessesLeft = guessesLeft - 1;
        
    }
    if (guessesLeft == 0) {
        losses = losses + 1;
        guessesLeft = 10;
        guesses = [];
    }
    if (guesses.indexOf(userChoice) >= 0) {}
       else{ guesses.push(userChoice); 
    }
    var winsText = document.getElementById("win");
    winsText.innerHTML = wins;
    var lossesText = document.getElementById("loss");
    lossesText.innerHTML = losses;
    var guessesLeftText = document.getElementById("guessLeft");
    guessesLeftText.innerHTML = guessesLeft;
    var guessesArray = document.getElementById("guesses");
    guessesArray.innerHTML = guesses;
}
