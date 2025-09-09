// global
                // null if first load with no score stored
let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
    }; // default value 

function playGame(myChoice) {
    let computerMove = pickComputerMove();
    let result = ''; 
    if (myChoice === 'scissors') {
        result = (computerMove === 'rock' && 'You lose') ||
                 (computerMove === 'paper' && 'You win') ||
                'Tie'; 
    } else if (myChoice === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else {
            result = 'You win';
        }
    } else {
        result = (computerMove === 'rock' && 'You win') ||
                 (computerMove === 'paper' && 'Tie') ||
                 'You lose';
    }

    if (result === 'You win') {
        score.wins += 1; 
    } else if (result === 'You lose') {
        score.losses += 1; 
    } else {
        score.ties += 1; 
    }

    localStorage.setItem('score', JSON.stringify(score));
    
    alert(`You picked ${myChoice}. Computer picked ${computerMove}. ${result}.
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1/3) {
        computerMove = 'rock'; 
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper'; 
    } else {
        computerMove = 'scissors'; 
    }
    return computerMove;
}