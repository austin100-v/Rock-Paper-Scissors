// javascript code for rock-paper-scissors game that is played entirely on console

// PSEUDOCODE
// COMPUTE random choice between rock, paper or scissors
// math.random 0-0.33 rock, 0.34-0.66 paper, 0.67-0.99 scissors

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resultDiv = document.querySelector(".results");
const scoreDiv = document.querySelector(".scores");

let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    if (humanScore === 5 || computerScore === 5) return;

    const computerSelection = getComputerChoice();
    let resultMessage = "";

    if (playerSelection === computerSelection) {
        resultMessage = `Draw! You both chose ${playerSelection}.`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        resultMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        resultMessage = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    // Update DOM
    resultsDiv.textContent = resultMessage;
    scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

    // Check winner
    if (humanScore === 5) {
        resultsDiv.textContent = "You won the game!";
    } else if (computerScore === 5) {
        resultsDiv.textContent = "Computer won the game!";
    }
}

rockBtn.addEventListener("click", () => {
    playRound("rock");
});

paperBtn.addEventListener("click", () => {
    playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
});

// function playGame() {
//     let paper = "paper";
//     let rock = "rock";
//     let scissors = "scissors";

//     


//     function getComputerChoice() {
//         let any = Math.random();

//         if (any <= 0.33) {
//             return rock;
//         } else if (any <= 0.66) {
//             return paper;
//         } else {
//             return scissors;
//         }
//     }



//     function getHumanChoice() {
//         let user = prompt("Enter either rock, paper or scissors").toLowerCase()

//         if (user == "rock") {
//             return rock;
//         } else if (user == "paper") {
//             return paper;
//         } else if (user == "scissors") {
//             return scissors;
//         } else {
//             console.log("please enter a valid choice");
//         }
//     }




//     function playRound(humanChoice, computerChoice) {

//          if (humanChoice == computerChoice) {
//              console.log("You draw " + humanChoice + " is equal to " + computerChoice)
//          } else if (humanChoice == rock && computerChoice == scissors || humanChoice == scissors && computerChoice == paper || humanChoice == paper && computerChoice == rock) {
//              humanScore += 1;
//              console.log("You win " + humanChoice + " beats " + computerChoice + ". Your score is " + humanScore + " and the computer's is " + computerScore);
//          } else if (humanChoice == rock && computerChoice == paper || humanChoice == paper && computerChoice == scissors || humanChoice == scissors && computerChoice == rock) {
//              computerScore += 1;
//              console.log("You Lost! " + computerChoice + " beats " + humanChoice + ". Your score is " + humanScore + " and the computer's is " + computerScore);
//          } else {
//              console.log("play the game again");
//         }

//     }

//     for (let i = 1; i <= 5; i++) {
//         console.log("Round " + i);
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }

//     if (humanScore > computerScore) {
//         console.log("You won the game. You: " + humanScore + "\n computer: " + computerScore);
//     } else if (humanScore < computerScore) {
//         console.log("You lost the game. You: " + humanScore + "\n computer: " + computerScore);
//     } else {
//         console.log("It's a tie. You: " + humanScore + "\n computer: " + computerScore)
//     }




// }

// playGame();



