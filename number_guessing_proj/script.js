let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let rand_num = Math.floor(Math.random() * 10);
    return rand_num;
}
//console.log(generateTarget());
//The three parameters represented here are for human guess, computer guess, and secret target number to be guessed 
const compareGuess = (h_guess, c_guess, s_guess) => {
    /*
    human = h_guess;
    computer = c_guess;
    secret_ans = s_guess;
    if(secret_ans > human && secret_ans > computer){
        if(secret_ans - human > secret_ans - computer){
            console.log("Human wins");
            return true;
       }else if(secret_ans - human < secret_ans - computer){
            console.log('Computer wins');
            return false;
       }
    }
    if(secret_ans == human){
        console.log("Human wins");
        return true;
    }else if(secret_ans == computer){
        console.log("Computer wins");
        return false;
    }
    */
   const human_diff = Math.abs(s_guess - h_guess);
   const computer_diff = Math.abs(s_guess - c_guess);
   if(human_diff <= computer_diff){
    return true;
   }else{
    return false;
   }
}

//Updating score
const updateScore = (winner) => {
    if(winner === 'human'){
        humanScore++;
    }else if(winner === 'computer'){
        computerScore++;
    }
}

//Going to next round
const advanceRound = () => {
    currentRoundNumber++;
}