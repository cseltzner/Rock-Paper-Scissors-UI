/* 
when rock button clicked -> store player input as rock, --> computer input --> determine winner


*/

document.getElementById('rock').addEventListener('click', () => {
    playGame('rock');
})


document.getElementById('paper').addEventListener('click', () => {
    playGame('paper')
})

document.getElementById('scissors').addEventListener('click', () => {
    playGame('scissors');
})



function computerInput() {
    compCode = Math.floor(Math.random() * 3);
    if (compCode == 0) {
        return 'rock';
    }
    else if (compCode == 1) {
        return 'paper';
    }
    else if (compCode == 2) {
        return 'scissors';
    }
    else {
        console.log('Error in computer Input. Likely picked "3"')
    }
}


function determineWinner(player, computer) {
    if (player == computer) {
        return 'tie';
    }

    if (player == 'rock' && computer == 'paper') {
        return 'loss';
    }

    if (player == 'rock' && computer == 'scissors') {
        return 'win';
    }

    if (player == 'paper' && computer == 'rock') {
        return 'win';
    }

    if (player == 'paper' && computer == 'scissors') {
        return 'loss';
    }

    if (player == 'scissors' && computer == 'rock') {
        return 'loss';
    }

    if (player == 'scissors' && computer == 'paper') {
        return 'win';
    }
}

function playGame(playerChoice) {
    let computerChoice = computerInput();
    let winOrLose = determineWinner(playerChoice, computerChoice);
    if (winOrLose == 'win') {
        playerWins(playerChoice, computerChoice);
    }
    else if (winOrLose == 'loss') {
        playerLoses(playerChoice, computerChoice);
    }
    else if (winOrLose == 'tie') {
        playerTies(playerChoice, computerChoice);
    }
}

function playerWins(playerChoice, computerChoice) {
    alert(`You win! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}`);
}

function playerLoses(playerChoice, computerChoice) {
    alert(`You lose... ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}`);
}

function playerTies(playerChoice) {
    alert(`It's a tie! You both chose ${playerChoice}`);
}

