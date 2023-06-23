//console.log('hi');
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    }else{
    console.log('Incorrect value');
    }
  };
  //
  const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2: 
      return 'scissors';
      break;
  }
  };
  //console.log(getComputerChoice());
  const determine_winner = (userChoice, computerChoice) =>{
    if(userChoice == computerChoice){
      return 'A tie!';
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer wins!';
      }else if(computerChoice === 'scissors'){
        return 'User wins!';
      }
    }
  
    if(userChoice === 'paper'){
      if(computerChoice === 'rock'){
        return 'User wins!';
      }else if(computerChoice === 'scissors'){
        return 'Computer wins!';
      }
    }
  
    if(userChoice === 'scissors'){
      if(computerChoice === 'paper'){
        return 'User wins!';
      }else if(computerChoice === 'rock'){
        return 'Computer wins!';
      }
    }
  };
  //console.log(determine_winner('rock', 'rock'));
  const playGame = () => {
    let userChoice = getUserChoice('paper');
    console.log('User Choice: ' + userChoice);
    let computerChoice = getComputerChoice('rock');
    console.log('Computer Choice: ' + computerChoice);
  
    console.log(determine_winner(userChoice, computerChoice));
  };
  playGame();
  