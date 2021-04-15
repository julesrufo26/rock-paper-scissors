function getName(){
    let userName = prompt("Enter your name: ", "player");
    if (userName.length > 10) {
        userName = userName.substr(0, 10);
    }
    
    return userName;
}

function setName(name) {
    let newName = name;
    document.querySelector("#user-name").textContent = newName;
}

function showRules(){
    let modal = document.querySelector(".modal");
    modal.style.display = "block";

    const btn = document.querySelector('.close');
    btn.addEventListener('click', () => {
        closeModal();
    });
}

function closeModal() {
    let modal = document.querySelector(".modal");
    modal.style.display = "none";
}

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = choices[randomNumber];

    return choice;
}

function playRound(playerSelection, computerSelection) {
    let playerHand = document.getElementById("player-hand");
    let computerHand = document.getElementById("computer-hand");

    playerHand.src = "images/left-animated.gif";
    computerHand.src = "images/right-animated.gif"

    if(playerSelection == "rock" && computerSelection == "scissors") {
        setTimeout(function() {
            playRoundResult("player");
            playerHand.src = "images/rock-left.png";
            computerHand.src = "images/scissors-right.png";
        }, 2300);
        
    }

    else if(playerSelection == "rock" && computerSelection == "paper") {
        setTimeout(function() {
            playRoundResult("computer");
            playerHand.src = "images/rock-left.png";
            computerHand.src = "images/paper-right.png";
        }, 2300);
    }

    else if(playerSelection == "rock" && computerSelection == "rock") {
        setTimeout(function() {
            playRoundResult("draw");
            playerHand.src = "images/rock-left.png";
            computerHand.src = "images/rock-right.png";
        }, 2300);
    }

    else if(playerSelection == "paper" && computerSelection == "rock") {
        setTimeout(function() {
            playRoundResult("player");
            playerHand.src = "images/paper-left.png";
            computerHand.src = "images/rock-right.png";
        }, 2300);
    }

    else if(playerSelection == "paper" && computerSelection == "scissors") {
        setTimeout(function() {
            playRoundResult("computer");
            playerHand.src = "images/paper-left.png";
            computerHand.src = "images/scissors-right.png";
        }, 2300);
    }

    else if(playerSelection == "paper" && computerSelection == "paper") {
        setTimeout(function() {
            playRoundResult("draw");
            playerHand.src = "images/paper-left.png";
            computerHand.src = "images/paper-right.png";
        }, 2300);
    }

    else if(playerSelection == "scissors" && computerSelection == "paper") {
        setTimeout(function() {
            playRoundResult("player");
            playerHand.src = "images/scissors-left.png";
            computerHand.src = "images/paper-right.png";
        }, 2300);
    }

    else if(playerSelection == "scissors" && computerSelection == "rock") {
        setTimeout(function() {
            playRoundResult("computer");
            playerHand.src = "images/scissors-left.png";
            computerHand.src = "images/rock-right.png";
        }, 2300);
    }

    else if(playerSelection == "scissors" && computerSelection == "scissors") {
        setTimeout(function() {
            playRoundResult("draw");
            playerHand.src = "images/scissors-left.png";
            computerHand.src = "images/scissors-right.png";
        }, 2300);
    }
}

function playRoundResult(winner) {
    const roundResult = document.querySelector("#round-result");

    if (winner == "player") {
        roundResult.style.color = "#04ff04";
        roundResult.textContent = "You won!";
        updateScore(1,0);
    }
    else if (winner == "computer") {
        roundResult.style.color = "red";
        roundResult.textContent = "You lost.";
        updateScore(0,1);
    }
    else {
        roundResult.style.color = "white";
        roundResult.textContent = "Draw."
        updateScore(0,0);
    }
}

function updateScore(playerScore, computerScore) {
    const score = document.querySelector('#score');
    let playerCurrentScore =  parseInt(score.textContent.substr(0, 1),10);
    let computerCurrentScore =  parseInt(score.textContent.substr(2), 10);

    playerCurrentScore += playerScore;
    computerCurrentScore += computerScore;
    score.textContent = `${playerCurrentScore}:${computerCurrentScore}`;

    if(playerCurrentScore == 5) {
        showRules();
    }
    else if(computerCurrentScore == 5) {
        showRules();
    }
}

window.addEventListener('load', () => {
    setName(getName());
    showRules();

    const rock = document.querySelector("#rock-select");
    const paper = document.querySelector("#paper-select");
    const scissors = document.querySelector("#scissors-select");

    rock.addEventListener('click', () => {
        playRound('rock', computerPlay());
    });

    paper.addEventListener('click', () => {
        playRound('paper', computerPlay());
    });

    scissors.addEventListener('click', () => {
        playRound('scissors', computerPlay());
    });
});

