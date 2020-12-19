
let playerScore = 0;
let computerScore = 0;
let scoreBoard;

function playRound (playerSelection, computerSelection){
    scoreBoard = "Your score: " + playerScore + " Computer's score: " + computerScore + "\n \n";
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let roundWin = `You won the round!`;
    let roundLost = "You lost the round. ";
    function increasePlayerScore(){
        return playerScore++;
    }
    function increaseComputerScore(){
        return computerScore++;
    }
    
    //player input
    
    playerSelection = prompt(`please enter one of the following: "rock" or "r", "paper" or "p", "scissors" or "s" `).replace(/\s/g, '').toLowerCase();
    // console.log("%c" + playerSelection, "color:red");
    
    if (playerSelection[0] === "r"){
        playerSelection = rock;
    }
    else if(playerSelection[0] === "p"){
        playerSelection = paper;
    }
    else{
        playerSelection = scissors;
    }
    
    //testing player input:
    console.log("%cYou have selected: " + playerSelection, "color:purple")
    
    
    //computer input
    function getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max) + 1);
    }
    computerSelection = getRandomInt(3)
    
    if(computerSelection === 1){
        computerSelection = rock;
        // computerSelection = scissors;
    }
    else if(computerSelection === 2){
        computerSelection = paper;
        // computerSelection = scissors;
    }
    else{
        computerSelection = scissors;
    }
    
    //testing the computer output:
    console.log("%cThe computer picked: " + computerSelection, "color:blue")
    
    
    //deciding a winner logic
    
    //tie
    if (playerSelection === computerSelection){
        console.log(`The round ended in a draw!`);
        
    }
    
    //everything that is not a tie
    if (playerSelection !== computerSelection){
        if((playerSelection === rock) && (computerSelection === paper)){
            console.log("%c" + roundLost, "color:red");
            return increaseComputerScore(); 
        }
        if((playerSelection === rock) && (computerSelection === scissors)){
            console.log("%c" + roundWin, "color: green");
            return increasePlayerScore();
        }
        if((playerSelection === paper) && (computerSelection === rock)){
            console.log("%c" + roundWin, "color: green");
            return increasePlayerScore();
        }
        if((playerSelection === paper) && (computerSelection === scissors)){
            console.log("%c" + roundLost, "color:red");
            return increaseComputerScore();
        }
        if((playerSelection === scissors) && (computerSelection === rock)){
            console.log("%c" + roundLost, "color:red");
            return increaseComputerScore();
        }
        if((playerSelection === scissors) && (computerSelection === paper)){
            console.log("%c" + roundWin, "color: green");
            return increasePlayerScore();
        }
    }
    
    
    
}






function game(){
    //use playRound in here.
    //5 rounds
    //keeps score and reports a winner after 5 rounds.
    
    playRound()
    console.log(scoreBoard);
    playRound()
    console.log(scoreBoard);
    playRound()
    console.log(scoreBoard);
    playRound()
    console.log(scoreBoard);
    playRound()
    console.log(scoreBoard);

    if( playerScore > computerScore){
        console.log(`You won the game!`);
    }
    else if( playerScore < computerScore){
        console.log(`You lost the game.`);
    }
    else{console.log(`it's a draw!`)}


    playerScore = 0;
    computerScore = 0;





}