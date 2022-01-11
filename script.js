let playerSelection, computerPlay, playerScore, computerScore, computerAnswer;
playerScore = 0;
computerScore = 0;

function computerChoose(){
    let a, b, c;
    const MAX = 3;
    a = Math.random(4)
    b = a * MAX;
    c = Math.floor(b)
    
    if(c === 0){
        computerAnswer = "rock";
    }else if(c === 1){
        computerAnswer = "paper";
    }else if(c === 2){
        computerAnswer = "scissors";
    }

    return computerAnswer;
}


let boxYourScore = document.querySelector(".yourScore");
let boxComputerScore = document.querySelector(".computerScore");
let boxResult = document.querySelector(".theResult");
let playerMove = document.querySelectorAll(".btn");

for (let i = 0; i <= playerMove.length -1; ++i){
    playerMove[i].addEventListener("click", e => {
        if (i === 0){
            playerSelection = "rock";
        }else if(i === 1){
            playerSelection = "paper";
        }else if(i === 2){
            playerSelection = "scissors";
        }

        computerChoose();

        /* I MUST COMPARE computerAnswer with playerSelection*/

        if( playerSelection == "rock" && computerAnswer == "rock"){ ///For rock
            playerScore += 0;
            computerScore += 0;
            boxResult.textContent = "Its a draw! Rock cant defeat Rock"

        }else if(playerSelection == "rock" && computerAnswer == "paper"){
            playerScore += 0;
            computerScore += 1;
            boxResult.textContent = "Computer wins! Paper defeat Rock"

        }else if(playerSelection == "rock" && computerAnswer == "scissors"){
            playerScore += 1;
            computerScore += 0;
            boxResult.textContent = "YOU win! Rock defeat Scissors"

        }else if(playerSelection == "paper" && computerPlay == "paper"){ /// For paper
            playerScore += 0;
            computerScore += 0;
            boxResult.textContent = "Its a draw! Paper cant defeat Paper"

        }else if(playerSelection == "paper" && computerAnswer == "scissors"){
            playerScore += 0;
            computerScore += 1;
            boxResult.textContent = "Computer wins! Scissors defeat Paper"

        }else if(playerSelection == "paper" && computerAnswer == "rock"){
            playerScore += 1;
            computerScore += 0;
            boxResult.textContent = "YOU win! Paper defeat Rock"

        }else if(playerSelection == "scissors" && computerAnswer == "scissors"){ /// For scissors
            playerScore += 0;
            computerScore += 0;
            boxResult.textContent = "Its a draw! Scissors cant defeat Scissors"

        }else if(playerSelection == "scissors" && computerAnswer == "rock"){
            playerScore += 0;
            computerScore += 1;
            boxResult.textContent = "Computer wins! Rock defeat Scissors"

        }else if(playerSelection == "scissors" && computerPlay == "paper"){
            playerScore += 1;
            computerScore += 0;
            boxResult.textContent = "wins! Scissors defeat Paper"
            
        }
        boxYourScore.textContent = playerScore;
        boxComputerScore.textContent = computerScore;

        if(playerScore === 5){
            alert("Congratulations, YOU WIN! The game will restart");
            playerScore = 0;
            computerScore = 0;
            boxResult.textContent = "Choose an option"
        }else if(computerScore === 5){
            alert("Computer wins, maybe next time you'll win! The game will restart");
            playerScore = 0;
            computerScore = 0;
            boxResult.textContent = "Choose an option"
        }
        boxYourScore.textContent = playerScore;
        boxComputerScore.textContent = computerScore;
})
}
