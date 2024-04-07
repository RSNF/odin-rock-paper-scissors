import { getComputerChoice, playRound } from "./game.js"

const sect = document.querySelector("section");
const gameLog = document.querySelector("div");
const playerListItem = document.querySelector(".player");
const computerListItem = document.querySelector(".computer");
const headingComputerChoice = document.createElement("h4");
const headingGameResult = document.createElement("h4");

sect.addEventListener("click", function(e) {
    
    let target = e.target;
    let playerSelection = ""
    let computerSelection = getComputerChoice();

    switch (target.id) {
        case "rock":
            playerSelection = "Rock";
            break;
        case "paper":
            playerSelection = "Paper";
            break;
        case "scissors":
            playerSelection = "Scissors";
            break;
    }

    if (playerSelection != "") {
        headingComputerChoice.textContent = `Computer's choice is ${computerSelection}`;
        headingGameResult.textContent = `${playRound(playerSelection, computerSelection)}`;

        if (headingGameResult.textContent.startsWith("Lose!")) {
            computerListItem.textContent = +computerListItem.textContent + 1;
        } else {
            playerListItem.textContent = +playerListItem.textContent + 1;
        }

        gameLog.appendChild(headingComputerChoice);
        gameLog.appendChild(headingGameResult);
    }
})
