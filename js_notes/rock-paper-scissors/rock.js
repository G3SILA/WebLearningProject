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
    
    alert(`You picked ${myChoice}. Computer picked ${computerMove}. ${result}.`);
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