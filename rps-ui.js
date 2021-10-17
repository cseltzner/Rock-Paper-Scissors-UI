/* 
when rock button clicked -> store player input as rock, --> computer input --> determine winner


*/
// I think it's OK to have global win and lose variables? Probs ok in this scenario
let winCount = 0;
let loseCount = 0;
let instruction = document.querySelector('#instruction');

document.getElementById('rock').addEventListener('click', () => {
    playGame('rock');
})


document.getElementById('paper').addEventListener('click', () => {
    playGame('paper')
})

document.getElementById('scissors').addEventListener('click', () => {
    playGame('scissors');
})

function resetGame() {
    winCount = 0;
    loseCount = 0;
    let winScoreText = document.querySelector('#wins');
    winScoreText.textContent = `Wins: ${winCount}`;
    let loseScoreText = document.querySelector('#losses');
    loseScoreText.textContent = `Losses: ${loseCount}`;
    let instruction = document.querySelector('#instruction');
    instruction.textContent = 'Your choice... Rock, paper, or scissors? Best of 3...'; 

}


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

function playGame(playerChoice) {
    let computerChoice = computerInput();
    let winOrLose = determineWinner(playerChoice, computerChoice);
    if (winOrLose == 'win') {
        winCount += 1;
        playerWins(playerChoice, computerChoice);
        if (winCount == 3) {
            gameEnd();
        }
    }
    else if (winOrLose == 'loss') {
        loseCount += 1;
        playerLoses(playerChoice, computerChoice);
        if (loseCount == 3) {
            gameEnd();
        }
    }
    else if (winOrLose == 'tie') {
        playerTies(playerChoice, computerChoice);
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


function playerWins(playerChoice, computerChoice) {
    let winScoreText = document.querySelector('#wins');
    winScoreText.textContent = `Wins: ${winCount}`;
    instruction.textContent = `You win! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}`
}

function playerLoses(playerChoice, computerChoice) {
    let loseScoreText = document.querySelector('#losses');
    loseScoreText.textContent = `Losses: ${loseCount}`;
    instruction.textContent = `You lose... ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}`;
}

function playerTies(playerChoice) {
    instruction.textContent = `It's a tie! You both chose ${playerChoice}`;
}

function gameEnd() {
    if (winCount == 3) {
        alert('Congratulations! You won 3 games!');
    }
    else if (loseCount == 3) {
        alert('Congratulations! You are a loser!');
    }
    else {
        console.log('Error with gameEnd()');
    }
    resetGame();
}