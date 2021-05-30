function computerPlay() {
    rand = Math.floor(Math.random() * 3) + 1;
    if (rand === 1) { return "rock"; }
    else if (rand === 2) { return "paper"; }
    else { return "scissors"; }
}

function playRound(playerSelection, computerSelection) {
    playerSelectFormatStr = playerSelection.toLowerCase();
    computerSelectFormatStr = computerSelection.toLowerCase();

    tie = 0;
    playerWins = 1;
    computerWins = 2;

    // Player chooses rock
    if (playerSelectFormatStr === "rock") {
        if (computerSelectFormatStr === "rock") {
            console.log("Tie");
            return tie;
        }
        else if (computerSelectFormatStr === "scissors") {
            console.log("Player wins");
            return playerWins;
        }
        else {
            console.log("Computer wins");
            return computerWins;
        }
    }
    // Player chooses paper
    else if (playerSelectFormatStr === "paper") {
        if (computerSelectFormatStr === "paper") {
            console.log("Tie");
            return tie;
        }
        else if (computerSelectFormatStr === "rock") {
            console.log("Player wins");
            return playerWins;
        }
        else {
            console.log("Computer wins");
            return computerWins;
        }
    }
    // Player chooses scissors
    else {
        if (computerSelectFormatStr === "scissors") {
            console.log("Tie");
            return tie;
        }
        else if (computerSelectFormatStr === "paper") {
            console.log("Player wins");
            return playerWins;
        }
        else {
            console.log("Computer wins");
            return computerWins;
        }
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let flag = -1;

    for (i = 0; i < 5; i++) {
        console.log("Round " + (i + 1));
        flag = playRound(prompt("Enter rock, paper, or scissors: "), computerPlay());
        if (flag === 1) {
            playerScore++;
        }
        else if (flag === 2) {
            computerScore++;
        }
    }

    if (playerScore === computerScore) {
        console.log("Tie game")
    }
    else if (playerScore > computerScore) {
        console.log("Player wins game")
    }
    else {
        console.log("Computer wins game")
    }
}


