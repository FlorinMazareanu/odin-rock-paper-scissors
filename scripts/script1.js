console.log("test");

function getPlayerChoice(pc) {
    console.log("se executa getPlayerChoice");
    if (pc == 0) {
        console.log("ai ales piatra");
        document.getElementById("status-joc").innerHTML = "rock";
    }
    else if (pc == 1) {
        console.log("ai ales hartie");
        document.getElementById("status-joc").innerHTML = "paper";
    }
    else {
        console.log("ai ales foarfeca");
        document.getElementById("status-joc").innerHTML = "scissor";
    }
}

function getComputerChoice() {
    console.log("se executa getComputerChoice");
    //console.log(Math.floor(Math.random() * 3));
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
}

getComputerChoice();