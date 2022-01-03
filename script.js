setTimeout(() => {

    alert("Recommendation: Set the console to the bottom")
    let playerName, playerSelection, computerPlay, playerScore, computerScore, yesNo;
    playerName = prompt("Whats your username?");
    playerScore = 0;
    computerScore = 0;

    for(let i = 0; i <= 6; ++i){

        setTimeout(() => {

            if(i < 5){

                playerSelection = prompt("Choose: Rock,  Paper   or   Scissors").toLowerCase();

                function computerChoose(){
                    let a, b, c, computerAnswer;
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

                console.log("%c -----------------------------------", "color:green;");
                computerPlay = computerChoose();
                console.log(playerSelection)
                console.log(computerPlay)

                function playGame(playerSelection, computerPlay){

                    let result;

                    if(playerSelection == "rock" && computerPlay == "rock"){ ///For rock
                        result = "Its a draw! Rock cant defeat Rock"
                        ++playerScore;
                        ++computerScore;
                    }else if(playerSelection == "rock" && computerPlay == "paper"){
                        result = "Computer wins! Paper defeat Rock"
                        ++computerScore;
                    }else if(playerSelection == "rock" && computerPlay == "scissors"){
                        result = playerName + " wins! Rock defeat Scissors"
                        ++playerScore;
                    }else if(playerSelection == "paper" && computerPlay == "paper"){ /// For paper
                        result = "Its a draw! Paper cant defeat Paper"
                        ++playerScore;
                        ++computerScore;
                    }else if(playerSelection == "paper" && computerPlay == "scissors"){
                        result = "Computer wins! Scissors defeat Paper"
                    }else if(playerSelection == "paper" && computerPlay == "rock"){
                        result = playerName + " wins! Paper defeat Rock"
                    }else if(playerSelection == "scissors" && computerPlay == "scissors"){ /// For scissors
                        result = "Its a draw! Scissors cant defeat Scissors"
                        ++playerScore;
                        ++computerScore;
                    }else if(playerSelection == "scissors" && computerPlay == "rock"){
                        result = "Computer wins! Rock defeat Scissors"
                        ++computerScore;
                    }else if(playerSelection == "scissors" && computerPlay == "paper"){
                        result = playerName + " wins! Scissors defeat Paper"
                        ++playerScore;
                    }else{
                        result = console.log("Something went wrong... Try again! (please)")
                        --i;
                    }

                    return result;
                }
                console.log("%c -----------------------------------", "color:tomato;");
                console.log(playGame(playerSelection, computerPlay));
                console.log(`%c ♥ Your score is: ${playerScore} `, `color:pink;font-size:1rem;background: linear-gradient(#f44161, #4198e5);font-weight:bold;`);  
                console.log(`%c ♦ Computer score is: ${computerScore} `, `color:pink;font-size:1rem;background-color:blue;background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);font-weight:bold;`);

            }else if(i == 6){
                
                if(playerScore > computerScore){
                    alert("Player Wins!")
                }else if(playerScore < computerScore){
                    alert("Computer Wins!")
                }else{
                    alert("Its a draw!")
                }

                yesNo = prompt("Do you want to play again? yes/no").toLowerCase();

                if (yesNo == "yes"){
                    i = 0;
                    alert("If it doesnt work, press F5")
                    playerScore = 0;
                    computerScore = 0;
                }else if(yesNo == "no"){
                    i = 6;
                    alert("Thanks for playing! Game is over")
                }
            }
                
        }, 500);
    }

}, 1000);



