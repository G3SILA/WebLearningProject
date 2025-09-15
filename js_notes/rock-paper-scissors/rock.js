// global
                // null if first load with no score stored
let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
    }; // default value 

updateScoreElement();

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') playGame('rock');
    if (event.key === 'p') playGame('paper');
    if (event.key === 's') playGame('scissors');
});


document.querySelector('.js-rock-button').addEventListener('click', () => {playGame('rock');});

document.querySelector('.js-paper-button').addEventListener('click', () => {playGame('paper');});

document.querySelector('.js-scissors-button').addEventListener('click', () => {playGame('scissors');});

document.querySelector('.js-reset-button').addEventListener('click', () => {
    score.wins = 0;
    score.ties = 0;
    score.losses = 0; 
    localStorage.removeItem('score'); 
    updateScoreElement();
    alert('Score has been reset.');
});

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

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = 
        `You
        <img src="img/${myChoice}-emoji.png" class="move-icon">
        <img src="img/${computerMove}-emoji.png"class="move-icon">
        Computer.`;
    updateScoreElement();
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

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = 
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


let isAutoPlaying = false; 
let intervalId; // to stop

document.querySelector('.js-auto-button').addEventListener('click', autoPlay);

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(function(){
            playGame(pickComputerMove());
        }, 1000);
        isAutoPlaying = true;
        document.querySelector('.js-auto-button').innerText = 'Stop Play';
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false; 
        document.querySelector('.js-auto-button').innerText = 'Auto Play';
    }
}
