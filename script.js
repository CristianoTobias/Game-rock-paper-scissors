
const playRound = (playerSelection, computerSelection) => {
    
    console.log(`Your choice "${playerSelection}" and the computer choice "${computerSelection}"!`)
    if(playerSelection == computerSelection){
        return "It's a tie!";

    }else if(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            scorePlayer++;
            return "You won! Paper beats Rock!";
        }else {
           scoreComputer++;
           return "You Lose! Scissor beats Paper!";
        }

    }else if(playerSelection == 'rock'){
        if(computerSelection == 'scissor'){
            scorePlayer++;
            return "You won! Rock beats Scissor!";
            
        }else {
            scoreComputer++;
           return "You Lose! Paper beats Rock!";
        }
            
    }else {
        if(computerSelection == 'paper'){
            scorePlayer++;
            return "You won! Scissor beats Paper!";
        }else {
            scoreComputer++;
           return "You Lose! Rock beats Scissor!";
        }
    }
  }
  
  
const computerPlay = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 0){
        return "rock"
    }else if(randomNumber == 1){
        return "paper"
    }else {
        return "scissor"
    }
    
}

const game = () => {
    scorePlayer = 0;
    scoreComputer = 0;
    for(let i = 0; i < 5; i++){
        const playerSelection = window.prompt("Choose: Paper/Rock/Scissor! ").toLowerCase()
        const computerSelection = computerPlay();
        const message = playRound(playerSelection, computerSelection);
        window.alert(`Your choice "${playerSelection}" and the computer choice "${computerSelection}"! ${message}`)
        console.log(message);
    }
   if(scorePlayer > scoreComputer){
        window.alert(`Congrats you won with Score = ${scorePlayer}`);
        console.log(`Congrats you won with Score = ${scorePlayer}`);
   }else if(scoreComputer > scorePlayer){
        window.alert(`Computer won with Score = ${scoreComputer}`);
        console.log(`Congrats you won with Score = ${scoreComputer}`);
   }else {
       window.alert(`End game, it's a Tie!`);
       console.log(`End game, it's a Tie!`);
       
   }
  
  
}


game();
