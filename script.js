function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3)

    if (randNum == 0) {
        return "Rock";
    } else if (randNum == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player == computer) {
        return `Draw! ${player} vs ${computer}`;
    }

    if (player == "rock" && computer == "scissors") {
        return `Win! ${playerSelection} beats ${computerSelection}`;
    } else if (computer == "paper") {
        return `Lose! Paper beats ${playerSelection}`;
    }

    if (player == "paper" && computer == "rock") {
        return `Win! ${playerSelection} beats Rock`;
    } else if (computer == "scissors") {
        return `Lose! Scissors beats ${playerSelection}`;
    }

    if (player == "scissors" && computer == "paper") {
        return `Win! ${playerSelection} beats Paper`;
    } else {
        return `Lose! Rock beats ${playerSelection}`;
    }
}

function playGame() {

    let results;
    let playerSelection = "";

    for (let i = 0; i < 5; i++) {
        
        while (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors") {
            playerSelection = prompt("Rock, Paper, Scissors! What's your choice?");
        }

        results = playRound(playerSelection, getComputerChoice())

        console.log(results);

        playerSelection = "";
    }
}