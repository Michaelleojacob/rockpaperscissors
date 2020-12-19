console.log("%cGreat job on getting the console open!", "color:green; font-size: 25px");
console.log("%cTo play you need to click on the arrow under this colored text and type in:", "color:green; font-size: 25px")
console.log("%cgame()", "color:blue; font-size: 25px")
console.log("%cthen hit enter", "color:green; font-size: 25px")
console.log("\n")


let playerScore = 0;
let computerScore = 0;
let scoreBoard;

function playRound (playerSelection, computerSelection){
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let roundWin = `You won the round!`;
    let roundLost = "You lost the round. ";
    function increasePlayerScore(){
        playerScore++;
        return scoreBoard = "Your score: " + playerScore + " Computer's score: " + computerScore + "\n \n";
    }
    function increaseComputerScore(){
        computerScore++;
        return scoreBoard = "Your score: " + playerScore + " Computer's score: " + computerScore + "\n \n";
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
        console.log("%cThe round ended in a draw!", "color:orange");
        scoreBoard = "Your score: " + playerScore + " Computer's score: " + computerScore + "\n \n";

        
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

    console.log(`final score ${scoreBoard}`)

    if( playerScore > computerScore){
        console.log("%cYou won the match!", "color:green; font-size: 25px");
        console.log(`to replay, you can type "game()" again and press enter, or simply press the "up" arrow key on your keyboard and then press enter.`)
    }
    if( playerScore < computerScore){
        console.log("%cYou lost the match.", "color:red; font-size: 25px");
        console.log(`to replay, you can type "game()" again and press enter, or simply press the "up" arrow key on your keyboard and then press enter.`)

    }
    if( playerScore === computerScore){

        console.log("%cThe match ended in a draw.", "color:orange; font-size: 25px" )
        console.log(`to replay, you can type "game()" again and press enter, or simply press the "up" arrow key on your keyboard and then press enter.`)
    }


    playerScore = 0;
    computerScore = 0;

}

