let playerScore=0;
let computerScore =0;
let draws=0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber===0){
        return"rock";
    }
    else if(randomNumber ===1){
        return "paper";
    }
    else {
        return"scissors";
    }
}

function playGame(playerChoice){
    let computerChoice = getComputerChoice();
    let result;

    if (playerChoice === computerChoice){
        result="It's a draw";
        draws ++; //draw=draw+1
    }
    else if (playerChoice=== "rock" && computerChoice==="scissors"||
             playerChoice=== "paper" && computerChoice==="rock" ||
             playerChoice=== "scissors" && computerChoice==="paper"){
                result ="you win";
                playerScore ++;
             }
    else {
        result ="You lose!"
        computerScore++;

        }

        document.getElementById("choices").innerHTML="You chose: "+playerChoice+"<br>Computer chose: "+ computerChoice +"<br>"+ result;
        document.getElementById("results").innerHTML="results: "+result;
        document.getElementById("score").innerHTML="Your Score: "+ playerScore+"<br>Computer Score : "+ computerScore +"<br>Draws: "+ draws;
}
