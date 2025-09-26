let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a draw! 🤝";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win! 🎉 ${playerChoice} beats ${computerChoice}`;
    playerScore++;
  } else {
    result = `You lose! 😢 ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  }

  document.getElementById("result").textContent = result;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}
