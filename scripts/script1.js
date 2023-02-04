let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

function getPlayerChoice(playerChoice) {
    let computerChoice = getComputerChoice();
    if (playerChoice == 0) {
        switch(computerChoice) {
            case 0:
                document.getElementById("status-joc").innerHTML = "You both chose rock";
                break;
            case 1:
                document.getElementById("status-joc").innerHTML = "You chose rock, computer chose paper";
                computerScore++;
                break;
            case 2:
                document.getElementById("status-joc").innerHTML = "You chose rock, computer chose scissors";
                playerScore++;
                break;
            default:
                console.log("???");
        }
    }
    else if (playerChoice == 1) {
        switch(computerChoice) {
            case 0:
                document.getElementById("status-joc").innerHTML = "You chose paper, computer chose rock";
                playerScore++;
                break;
            case 1:
                document.getElementById("status-joc").innerHTML = "You both chose paper";
                break;
            case 2:
                document.getElementById("status-joc").innerHTML = "You chose paper, computer chose scissors";
                computerScore++;
                break;
            default:
                console.log("???");
        }
    }
    else {
        switch(computerChoice) {
            case 0:
                document.getElementById("status-joc").innerHTML = "You chose scissors, computer chose rock";
                computerScore++;
                break;
            case 1:
                document.getElementById("status-joc").innerHTML = "You chose scissors, computer chose paper";
                playerScore++;
                break;
            case 2:
                document.getElementById("status-joc").innerHTML = "You both schose scissors";
                break;
            default:
                console.log("???");
        }
    }
    document.getElementById("scor-player").innerHTML = playerScore;
    document.getElementById("scor-computer").innerHTML = computerScore;
}

