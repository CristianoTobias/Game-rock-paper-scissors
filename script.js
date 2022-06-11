document.body.scroll = "no"; // IE
let  scoreComputer = document.querySelector('#scoreComputer');
let  scorePlayer = document.querySelector('#scorePlayer');
let  message = document.querySelector('#message');
let imgOptions = document.querySelector('#img-options');
let imgPlayer = document.querySelector('#img-player');
let imgComputer = document.querySelector('#img-computer');
let divInputs = document.querySelector('#div-inputs');
let divButtonsGame = document.querySelector('#buttons-game');
let endGame = false;
let a =  b = 0;
imgComputer.style.visibility = "hidden";
imgPlayer.style.visibility = "hidden";
divInputs.style.visibility = "hidden";
divButtonsGame.style.visibility = "hidden";

const isclicked = () => {
    if(a < 5 && b < 5){
        return true;
    }else {
        return false;
    }
}


const playRound = (playerSelection, computerSelection) => {
    if(isclicked()){
        
        imgComputer.classList.remove("spinner");
        imgPlayer.classList.remove("spinner");
        imgOptions.style.display = "none";
        imgComputer.style.visibility = "visible";
        imgPlayer.style.visibility = "visible";
        imgPlayer.src = `${playerSelection}right.png`;
        imgComputer.src =`${computerSelection}left.png`;
        if(Number(scorePlayer.value) < 5 && Number(scoreComputer.value) < 5){ 
                if(playerSelection == computerSelection){
                    message.innerHTML = "It's a tie!";
                }else if(playerSelection == 'paper'){
                    if(computerSelection == 'rock'){
                        a++;
                        message.innerHTML = `You won!<br>Paper beats Rock!`;
                       
                    }else {
                        b++;
                        message.innerHTML = `You Lose!<br>Scissor beats Paper!`;
                        
                    }
                }else if(playerSelection == 'rock'){
                    if(computerSelection == 'scissor'){
                        a++;
                        message.innerHTML = `You won!<br>Rock beats Scissor!`;
                        
                    }else {
                        b++;
                        message.innerHTML = `You Lose!<br> Paper beats Rock!`;
                        
                    }
                }else if(computerSelection == 'paper'){
                        a++;
                        message.innerHTML = `You won!<br>Scissor beats Paper!`;
                        
                    }else {
                        b++;
                        message.innerHTML = `You Lose!<br>Rock beats Scissor!`;
                        
                    }
        }
              
    }
    scoreComputer.value = b;
    scorePlayer.value = a;
    divButtonsGame.style.visibility = "hidden";
    setTimeout(startGame, 5000);
   
    
    
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

const resetGame = () => {
    if(a == 5 || b == 5){
    imgComputer.style.visibility = "hidden";
    imgPlayer.style.visibility = "hidden";
    imgOptions.style.display = "block";
    scorePlayer.value = 0
    scoreComputer.value = 0;
    a = 0;
    b = 0;
    message.innerHTML = "";
    startGame();
    }
}

const startGame = () => {
    if(endGame){
        endGame = false;
        resetGame();
    }        
    else if(a == 5 || b == 5){
        divButtonsGame.style.visibility = "hidden"; 
        imgOptions.style.display = "block";
        imgComputer.style.visibility = "hidden";
        imgPlayer.style.visibility = "hidden"; 
        endGame = true;  
        
        if(a == 5){
        message.innerHTML = "Congrats! You won!"
        }else{
        message.innerHTML = "Computer won!"
        } 
    

    }else{
        imgOptions.style.display = "none";
        imgComputer.style.visibility = "visible";
        imgPlayer.style.visibility = "visible";
        message.innerHTML = "Rock, paper or scissor?"
        divInputs.style.visibility = "visible";
        imgComputer.classList.add("spinner");
        imgPlayer.classList.add("spinner");
        divButtonsGame.style.visibility = "visible";
       
    } 
        
}


