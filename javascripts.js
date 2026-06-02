function getComputerChoice(){
    const computerCoice = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random()*3);
    return computerCoice[num];
}


let humanScore = 0;
let computerScore = 0;
let humanChoice;
const text = document.querySelector(".text")
const my = document.querySelector(".my");
const pc = document.querySelector(".pc")
const img1 = document.createElement("img");
const img2 = document.createElement("img");


function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock"){
        img1.src="rock.png";
    }
    else if (humanChoice === "paper"){
        img1.src="paper.png"
    }
    else if (humanChoice === "scissors"){
        img1.src="scissors.png"
    }
    if (computerChoice === "rock"){
        img2.src="rock.png"
    }
    else if (computerChoice === "paper"){
        img2.src="paper.png"
    }
    else if (computerChoice === "scissors"){
        img2.src="scissors.png"
    }
    my.appendChild(img1);
    pc.appendChild(img2);
    if (humanChoice === computerChoice){
        text.textContent = `TIE, Your score: ${humanScore}, Computer score: ${computerScore}`;
        return
    }

    if (humanChoice === "rock"){
        if (computerChoice === "scissors"){
            humanScore += 1;
            if (humanScore === 5){
                text.textContent = `YOU WIN THE GAME, Your score: ${humanScore}, Computer score: ${computerScore}`
                humanScore = 0;
                computerScore = 0;
                return
            }
            text.textContent = `YOU WIN, Your score: ${humanScore}, Computer score: ${computerScore}`;
            return
        }
        computerScore += 1;
        if (computerScore === 5){
                text.textContent = `YOU LOSE THE GAME, Your score: ${humanScore}, Computer score: ${computerScore}`
                humanScore = 0;
                computerScore = 0;
                return
            }
        text.textContent = `YOU LOSE, Your score: ${humanScore}, Computer score: ${computerScore}`;
        return
    }

    if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            humanScore += 1;
            if (humanScore === 5){
                text.textContent = `YOU WIN THE GAME, Your score: ${humanScore}, Computer score: ${computerScore}`
                humanScore = 0;
                computerScore = 0;
                return
            }
            text.textContent = `YOU WIN, Your score: ${humanScore}, Computer score: ${computerScore}`;
            return
        }
        computerScore += 1
        if (computerScore === 5){
                text.textContent = `YOU LOSE THE GAME, Your score: ${humanScore}, Computer score: ${computerScore}`
                humanScore = 0;
                computerScore = 0;
                return
            }
        text.textContent = `YOU LOSE, Your score: ${humanScore}, Computer score: ${computerScore}`;
        return
    }

    if (humanChoice === "scissors"){
        if (computerChoice === "paper"){
            humanScore += 1
            if (humanScore === 5){
                textContent = `YOU WIN THE GAME, Your score: ${humanScore}, Computer score: ${computerScore}`
                humanScore = 0;
                computerScore = 0;
                return
            }
            text.textContent = `YOU WIN, Your score: ${humanScore}, Computer score: ${computerScore}`; 
            return;
        }
        computerScore += 1
        if (computerScore === 5){
                textContent = `YOU LOSE THE GAME, Your score: ${humanScore}, Computer score: ${computerScore}`
                humanScore = 0;
                computerScore = 0;
                return
            }
        text.textContent = `YOU LOSE, Your score: ${humanScore}, Computer score: ${computerScore}`;
        return
    }
}




const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


rock.addEventListener("click", getHumanChoice);
paper.addEventListener("click", getHumanChoice);
scissors.addEventListener("click", getHumanChoice);

function getHumanChoice(event){
    const name = event.target.id;
    switch(name){
        case "rock":
            humanChoice = "rock";
            break
        case "scissors":
            humanChoice = "scissors";
            break
        case "paper":
            humanChoice = "paper";
            break
    }
    playRound(humanChoice, getComputerChoice());
}





