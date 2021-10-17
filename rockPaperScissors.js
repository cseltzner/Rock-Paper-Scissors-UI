// Goal: Create Console Rock Paper Scissors
// funct intro(): Intro message
// funct start(): Place to start everything over, eg if playerInput is invalid
// funct playerInput(): prompt user for r/p/s, return to main game if non-valid answer, returns answer
// funct computerInput(): randomly selects r/p/s as 0/1/2, return result
// funct playRound(): takes args from player input and computer input, decides who wins, sends back to main if playing again
// Note: 0=rock, 1=paper, 2=scissors: 0>2, 1>0, 2>1

// UI requirements ->
// 3 r/p/s buttons, event listener sends to correct selection
// add div for displaying results
// Add display for running score, announce winner best of 5
// Holy heck this is some F'd up spaghetti. I'm gonna make some spaghetti and prob never look at this again...


// Program start ->
intro();
playerInput();

// Function definitions ->
function intro() {
    // Creates intro text and displays it
    let introDiv = document.createElement('h1');
    introDiv.textContent = "Welcome to Chase\'s Rock Paper Scissors Bonanza";
    introDiv.style.textAlign = 'center';

    let headerContainer = document.querySelector('#header');
    headerContainer.appendChild(introDiv);

}

// Starts game on player input
function playerInput() {
    let compAns = computerInput();
    document.getElementById('rock').addEventListener('click', () => {
        playerAns = 'r';
        playRound(playerAns, compAns);
    });
    document.getElementById('paper').addEventListener('click', () => {
        playerAns = 'p';
        playRound(playerAns, compAns);
    });
    document.getElementById('scissors').addEventListener('click', () => {
        playerAns = 's';
        playRound(playerAns, compAns);
    });
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
    let winningContainer = document.querySelector('#header');
    let winningMessage = document.createElement('h2');
    winningMessage.textContent = `You Win!!! The robot chose ${answerDict[computerAns]}`;
    winningContainer.appendChild(winningMessage);
    }



// Asks to play again, if yes return to start()
function again() {
    let playAgain = prompt('Would you like to play again? y/n');
    if (playAgain.toLowerCase() == 'y' || playAgain.toLowerCase() == 'yes') {
        playerInput();
    }

    else if (playAgain.toLowerCase() == 'n' || playAgain.toLowerCase() == 'no') {
        alert('Goodbye!');
    }

    else {
        alert('Invalid response!');
        again();
    }
}
