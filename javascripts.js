function getComputerChoice(){
    const computerChoice = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random()*3);
    return computerChoice[num]
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors");
    return humanChoice.toLowerCase();
}

let humanScore;
let computerScore;


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("TIE");
        return
    }

    if (humanChoice === "rock"){
        if (computerChoice === "scissors"){
            humanScore += 1;
            console.log("YOU WIN");
            return
        }
        computerScore += 1;
        console.log("YOU LOSE");
        return
    }

    if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            humanScore += 1;
            console.log("YOU WIN");
            return
        }
        computerScore += 1
        console.log("YOU LOSE");
        return
    }

    if (humanChoice === "scissors"){
        if (computerChoice === "paper"){
            humanScore += 1
            console.log("YOU WIN");;
            return;
        }
        computerScore += 1
        console.log("YOU LOSE");
        return
    }
}


function playGame(){
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++){
        let human = getHumanChoice();
        let computer = getComputerChoice();
        playRound(human, computer);
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    if (humanScore > computerScore){
        console.log("You win the game.");
    }else if (humanScore < computerScore){
        console.log("You lose the game");
    }else{
        console.log("TIE");
    }
}

playGame();