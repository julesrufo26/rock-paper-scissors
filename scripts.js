function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = choices[randomNumber];

    return choice;
}

function playerPlay() {
    let choice;
    choice = prompt("Rock, paper, or scissors?");
    choice = choice.toLowerCase();

    return choice;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock" && computerSelection == "paper") {
        alert("You won. Rock beats paper.");
        return "player";
    }

    else if(playerSelection == "rock" && computerSelection == "scissors") {
        alert("You lost. Rock is beaten by scissors.");
        return "computer";
    }

    else if(playerSelection == "rock" && computerSelection == "rock") {
        alert("Tie. You both selected rock.");
        return "tie";
    }

    else if(playerSelection == "paper" && computerSelection == "rock") {
        alert("You won. Paper beats rock.");
        return "player";
    }

    else if(playerSelection == "paper" && computerSelection == "scissors") {
        alert("You lost. Paper is beaten by scissors.");
        return "computer";
    }

    else if(playerSelection == "paper" && computerSelection == "paper") {
        alert("Tie. You both selected paper.");
        return "tie";
    }

    else if(playerSelection == "scissors" && computerSelection == "paper") {
        alert("You won. Scissors beats paper.");
        return "player";
    }

    else if(playerSelection == "scissors" && computerSelection == "rock") {
        alert("You lost. Scissors is beaten by rock.");
        return "computer";
    }

    else if(playerSelection == "scissors" && computerSelection == "scissors") {
        alert("Tie. You both selected scissors.");
        return "tie";
    }

    else {
        alert("No contest. You should only select between rock, paper, or scissors.");
        return "tie";
    }
}

function game(rounds){
    let playerScore = 0;
    let computerScore = 0;
    let keepGoing = true;

    while(keepGoing) {
        let winner;
        winner = playRound(playerPlay(), computerPlay());

        if(winner == "player") {
            playerScore++;
            alert("Current Score \r\nPlayer: " + playerScore + "\r\nComputer: " + computerScore);
        }
        else if(winner == "computer") {
            computerScore++;
            alert("Current Score \r\nPlayer: " + playerScore + "\r\nComputer: " + computerScore);
        }
        else {
            alert("Current Score \r\nPlayer: " + playerScore + "\r\nComputer: " + computerScore);
        }

        if(playerScore == rounds){
            alert("Congratulations! You won the game. You deserve a Redhorse beer.");
            keepGoing = false;
        }
        else if(computerScore == rounds) {
            alert("Try Again. Your computer just got lucky.");
            keepGoing = false;
        }
    }
}