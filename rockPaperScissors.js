// Goal: Create Console Rock Paper Scissors
// funct intro(): Intro message
// funct start(): Place to start everything over, eg if playerInput is invalid
// funct playerInput(): prompt user for r/p/s, return to main game if non-valid answer, returns answer
// funct computerInput(): randomly selects r/p/s as 0/1/2, return result
// funct playRound(): takes args from player input and computer input, decides who wins, sends back to main if playing again
// Note: 0=rock, 1=paper, 2=scissors: 0>2, 1>0, 2>1


// Program start ->
intro();

// Function definitions ->
function intro() {
    alert('Welcome to Chase\'s Rock Paper Scissors Bonanza.');
    start();
}

function start() {
    let playerAnswer = playerInput();
    let computerAnswer = computerInput();
    playRound(playerAnswer, computerAnswer);
}

function playerInput() {
    let correctAns = ['r', 'rock', 'p', 'paper', 's', 'scissors'];

    let playerAns = prompt('(r)ock, (p)aper, or (s)cissors? Type q to quit');

    // Ends game if player types 'Q'. Probably want to get rid of this if I add GUI*
    if (playerAns.toLowerCase() == 'q' || playerAns.toLowerCase() == 'quit') {
        alert('Goodbye!');
        throw new Error('Game end');
    }

    // Checks if playerAns is in correctAns array. If player answers a correctAns, playerInputCorrect is true and can move on. Could probably do this with an object.property but discovered that later in the project
    let playerInputCorrect = false;
    for (let i =0; i < correctAns.length; i++) {
        if (playerAns.toLowerCase() == correctAns[i]) {
            playerInputCorrect = true;
        }
    }

    if (playerInputCorrect == false) {
        alert('Invalid response, please try again');
        start();
    }

    // Returns player answer (r/p/s) as string
    else if (playerInputCorrect == true) {
        return playerAns;
    }

    //Error 101
    else {
        alert('Error 101: I have no idea how you got this error');
        console.log('Error 101');
    }
}

function computerInput() {
    // Computer picks random value between 0 and 2, then returns answer
    let computerAns = Math.floor(Math.random() * 3);
    return computerAns;
}

function playRound(playerAns, computerAns) {
    // This object defines possible correct answers for player input or computer input. Possible "bug", player entering 0 is equal to them selecting rock. Oh well
    let answerDict = {
        'r':'rock', 'rock':'rock', 0:'rock',
        'p':'paper', 'paper':'paper', 1:'paper',
        's':'scissors', 'scissors':'scissors', 2:'scissors'
    }
    // Makes player answer lower case to easily compare to the lower case object values
    playerAnsLowerCase = playerAns.toLowerCase();

    // All the fun if/else comparisons
    // Basically saying if player enters 'r', answerDict value is 'rock'. Computer enters 0, answerDict value is 'rock'. This leads to a tie (first if statement)
    if (answerDict[playerAnsLowerCase] == answerDict[computerAns]) {
        alert(`It's a tie! El Roboto chose ${answerDict[computerAns]}`);
    }

    else if (answerDict[playerAnsLowerCase] == 'rock' && answerDict[computerAns] == 'paper') {
        losingMessage(computerAns, answerDict);
    }

    else if (answerDict[playerAnsLowerCase] == 'rock' && answerDict[computerAns] == 'scissors') {
        winningMessage(computerAns, answerDict);
    }

    else if (answerDict[playerAnsLowerCase] == 'paper' && answerDict[computerAns] == 'rock') {
        winningMessage(computerAns, answerDict);
    }

    else if (answerDict[playerAnsLowerCase] == 'paper' && answerDict[computerAns] == 'scissors') {
        losingMessage(computerAns, answerDict);
    }

    else if (answerDict[playerAnsLowerCase] == 'scissors' && answerDict[computerAns] == 'rock') {
        losingMessage(computerAns, answerDict);
    }

    else if (answerDict[playerAnsLowerCase] == 'scissors' && answerDict[computerAns] == 'paper') {
        winningMessage(computerAns, answerDict);
    }

    // Error 102
    else {
        console.log('Error 102');
        alert('ERROR 102: I have no idea how you got this error');
    }

    again();


}

function losingMessage(computerAns, answerDict) {
    alert(`You Lose... The robot chose ${answerDict[computerAns]}`);
}

function winningMessage(computerAns, answerDict) {
    alert(`You Win!!! The robot chose ${answerDict[computerAns]}`);
}

// Asks to play again, if yes return to start()
function again() {
    let playAgain = prompt('Would you like to play again? y/n');
    if (playAgain.toLowerCase() == 'y' || playAgain.toLowerCase() == 'yes') {
        start();
    }

    else if (playAgain.toLowerCase() == 'n' || playAgain.toLowerCase() == 'no') {
        alert('Goodbye!');
    }

    else {
        alert('Invalid response!');
        again();
    }
}
