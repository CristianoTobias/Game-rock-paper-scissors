let  scoreComputer = document.querySelector('#scoreComputer');
let  scorePlayer = document.querySelector('#scorePlayer');
let  message = document.querySelector('#message');
let a =  b = 0;
let result = document.querySelector('#result');


const playRound = (playerSelection, computerSelection) => {
    
     if(Number(scorePlayer.value) < 6 && Number(scoreComputer.value) < 6){ 
    message.innerHTML += (`Your choice "${playerSelection}" and the computer choice "${computerSelection}"!`);
    if(playerSelection == computerSelection){
        result.innerHTML += "It's a tie!";

    }else if(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
           a++;
           message.innerHTML += "You won! Paper beats Rock!";
        }else {
          b++;
         message.innerHTML += "You Lose! Scissor beats Paper!";
        }

    }else if(playerSelection == 'rock'){
        if(computerSelection == 'scissor'){
          a++;
          message.innerHTML += "You won! Rock beats Scissor!";
            
        }else {
         b++;
         message.innerHTML += "You Lose! Paper beats Rock!";
        }
            
    }else {
        if(computerSelection == 'paper'){
         a++;
         message.innerHTML += "You won! Scissor beats Paper!";
        }else {
         b++;
         message.innerHTML += "You Lose! Rock beats Scissor!";
        }
        
    }
    }else {
    
    if(a > b){
        result.innerHTML +=(`Congrats you won with Score = ${scorePlayer.value}`);
        
   }else if(a > b){
    message.innerHTML +=(`Computer won with Score = ${scoreComputer.value}`);
    
   }else {
    message.innerHTML +=(`End game, it's a Tie!`);
    
  }
  
  
}
  scoreComputer.value = b;
  scorePlayer.value = a;
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