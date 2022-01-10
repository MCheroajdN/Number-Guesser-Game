let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//generates the secret target number, a random int 0-9.
const generateTarget = () =>{
    let targetNumber = Math.floor((Math.random ()) * 9 + 1)
    return targetNumber
  };
  
  const compareGuesses = (human, computer, targetnumber) => {
   if (human === computer) {
     return 'human wins';
   } 
   
   else if (human  >= targetnumber) {
     return true;
   }
  
    else {
     return false;
   }
  };
  
   const updateScore = (winner) => {
    if (winner === 'human') {
    let winner = humanScore++;
   } 
   
   else if (winner ==='computer') {
     let winner = computerScore++;
   }
  };
  
  const advanceRound = () => {
  currentRoundNumber += 1
  };
  
  console.log(generateTarget());
  console.log(compareGuesses(9, 6, 8));


 
  /*These below codes I need to complete. so unccompleted)
  //returns the distance between 2 numbers.
  const getAbsoluteDistance = (number1, number2) => {
    if (number1 > number2) {
      return (number1 - number2);
    }
    else {
      return (number2 - number1);
    }
  };
//check code works
  //console.log(getAbsoluteDistance(5, 8)); should return 3


  // returns true if user is closer to target, or tie; returns false if computer is closer to target. alerts if guess is out of range.
  const compareGuesses = (human, computer, targetnumber) => {
     if (human < 0 || human > 9) {
     alert("Sorry, your number is out of range! Please enter a number between 0 and 9");
     }
  };
  */