
function playRound (playerSelection, computerSelection){

    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    
    //player input

    playerSelection = prompt(`please enter one of the following: "rock" or "r", "paper" or "p", "scissors" or "s" `).replace(/\s/g, '').toLowerCase();
    console.log(playerSelection);

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
    console.log(`You have selected: ${playerSelection}`)


    //computer input
    function getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max) + 1);
    }
    computerSelection = getRandomInt(3)
    
    if(computerSelection === 1){
        computerSelection = rock;
    }
    else if(computerSelection === 2){
        computerSelection = paper;
    }
    else{
        computerSelection = scissors;
    }

    //testing the computer output:
    console.log(`The computer picked: ${computerSelection}`)



    //decide the outcome

    //rock
//     if(playerSelection = rock, computerSelection = rock){
//         console.log(`You tied the round.`);
// }
//     if(playerSelection = rock, computerSelection = paper){
//         console.log(`You lost the round.`);
// }
//      if(playerSelection = rock, computerSelection = scissors){
//         console.log(`You won the round!`);
// }

//     //paper
//      if(playerSelection = paper, computerSelection = rock){
//         console.log(`You won the round!`);
//     }
//      if(playerSelection = paper, computerSelection = paper){
//         console.log(`You tied the round.`);
//     }
//      if(playerSelection = paper, computerSelection = scissors){
//         console.log(`You lost the round.`);
//     }

//     //scissors
//      if(playerSelection = scissors, computerSelection = rock){
//         console.log(`You lost the round.`);
//     }
//      if(playerSelection = scissors, computerSelection = paper){
//         console.log(`You won the round!`);
//     }
//      if(playerSelection = scissors, computerSelection = scissors){
//         console.log(`You tied the round.`);
//     }



if (playerSelection === computerSelection){
    return `it's a draw!`;
}


}






function game(){
    //use playRound in here.
    //5 rounds
    //keeps score and reports a winner after 5 rounds.

}