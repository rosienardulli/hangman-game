$(document).ready(function () {

    /** variables */
    //array of word options
    let wordList = ['illinois', 'wisconsin', 'indiana', 'iowa', 'kansas', 'michigan', 'minnesota', 'missouri', 'nebraska',
        'northdakota', 'ohio', 'southdakota', 'wisconsin'];
    let chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    let dashWord = [];
    let userWins = 0;
    let userLoses = 0;
    let numberGuesses = 10;
    let wrongGuess = false;

    //function here
    function createDashWord(word) {
        let tmpDashWord = [];
        for (var i = 0; i < word.length; i++) {
            tmpDashWord.push("_");
        }
        return tmpDashWord;
    }

    function startGame() {
        let chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
        dashWord = createDashWord(chosenWord);
        //display
        numberGuesses = 10;
        chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
        $('#dashDiv').text(dashWord.join(" "));
        $('#winSpan').text(userWins);
        $('#loseSpan').text(userLoses);
        $('#guessesDiv').text(numberGuesses);
        $("#youLose").addClass("hide")
    }


    //execute events //init events
    startGame();
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    dashWord = createDashWord(chosenWord);

    //key up
  
        document.onkeyup = function (event) {
            let letterGuessed = event.key.toLowerCase();

            //check if letter in word
            for (var i = 0; i < chosenWord.length; i++) {
                if (letterGuessed === chosenWord[i]) {
                    dashWord[i] = letterGuessed;
                } else {
                    wrongGuess = true;
                }
            }
            if (wrongGuess === true) {
                if (numberGuesses > 0) {
                    numberGuesses--;
                }

            }

            console.log(numberGuesses)
            if (numberGuesses < 1) {
                if (numberGuesses > 0){
                    userLoses++;
                }   
                $('#loseSpan').text(userLoses);
                $("#youLose").removeClass("hide")
            }

            //if dashword = chosen word you win
            if (dashWord.join("") === chosenWord) {
                userWins++;


                //start new game
                chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
                dashWord = createDashWord(chosenWord);
            }

            //display 
            $('#dashDiv').text(dashWord.join(" "));
            $('#winSpan').text(userWins);
            $('#loseSpan').text(userLoses);
            $('#guessesDiv').text(numberGuesses);
        }
  

    // button
    document.getElementById("restart").onclick = startGame;
    $("#restart").on("click", startGame);

});