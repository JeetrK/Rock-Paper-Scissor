let userWins = 0;
let computerWins = 0;
let roundCount = 0;
let userChoice = "";
let computerChoice = "";
let userName = "";

// Function to get computer's choice randomly
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

// Function to determine the round winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won this round.";
    } else {
      userWins++;
      return "You won this round!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won this round.";
    } else {
      userWins++;
      return "You won this round!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won this round.";
    } else {
      userWins++;
      return "You won this round!";
    }
  }
};


const updateUI = () => {

  document.getElementById("userChoiceImg").src = `imgs/${userChoice}.png`; 
  document.getElementById("computerChoiceImg").src = `imgs/${computerChoice}.png`; 

  document.getElementById("playerResult").textContent = winnerMessage;  
  document.getElementById("computerResult").textContent = winnerMessage === "You won this round!" ? "Computer lost this round." : "Computer won this round.";


  document.getElementById("userWins").textContent = userWins;
  document.getElementById("computerWins").textContent = computerWins;

  if (roundCount === 5) {
    endGame();
  }
};


const endGame = () => {
  let resultMessage = "";
  if (userWins > computerWins) {
    resultMessage = `${userName} wins the game!`;
  } else if (userWins < computerWins) {
    resultMessage = `Computer wins the game!`;
  } else {
    resultMessage = "It's a tie game!";
  }

  document.getElementById("totalResults").textContent = resultMessage;
  document.getElementById("resetBtn").classList.remove("d-none");
};


const resetGame = () => {
  userWins = 0;
  computerWins = 0;
  roundCount = 0;
  document.getElementById("userWins").textContent = userWins;
  document.getElementById("computerWins").textContent = computerWins;
  document.getElementById("totalResults").textContent = "";
  document.getElementById("resetBtn").classList.add("d-none");
  document.getElementById("gameSection").classList.add("d-none");
  document.getElementById("startGameBtn").classList.remove("d-none");
};


document.getElementById("startGameBtn").addEventListener("click", () => {
  userName = document.getElementById("userNameInput").value;
  if (userName) {
    document.getElementById("startGameBtn").classList.add("d-none");
    document.getElementById("gameSection").classList.remove("d-none");
    document.getElementById("gameTitle").textContent = `Welcome, ${userName}! Let's Play!`;
  }
});


document.getElementById("rockBtn").addEventListener("click", () => {
  userChoice = "rock";
  playRound();
});
document.getElementById("paperBtn").addEventListener("click", () => {
  userChoice = "paper";
  playRound();
});
document.getElementById("scissorsBtn").addEventListener("click", () => {
  userChoice = "scissors";
  playRound();
});


const playRound = () => {
  computerChoice = getComputerChoice();
  winnerMessage = determineWinner(userChoice, computerChoice);
  roundCount++;
  updateUI();
};


document.getElementById("resetBtn").addEventListener("click", resetGame);
