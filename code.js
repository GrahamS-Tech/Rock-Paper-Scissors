let computerScore = 0;
let playerScore = 0;
let round = 0;
let pieces = ["rock", "paper", "scissors"];
let winnerLabel = document.getElementById("winner-label");
let gameOver = false;

document
  .getElementById("player-happy-rock")
  .addEventListener("click", function () {
    gamePlay("rock");
  });

document
  .getElementById("player-happy-paper")
  .addEventListener("click", function () {
    gamePlay("paper");
  });

document
  .getElementById("player-happy-scissors")
  .addEventListener("click", function () {
    gamePlay("scissors");
  });

document.getElementById("new-game").addEventListener("click", function () {
  document.getElementById("computer-happy-rock").style.visibility = "visible";
  document.getElementById("computer-happy-paper").style.visibility = "visible";
  document.getElementById("computer-happy-scissors").style.visibility =
    "visible";
  document.getElementById("player-happy-rock").style.visibility = "visible";
  document.getElementById("player-happy-paper").style.visibility = "visible";
  document.getElementById("player-happy-scissors").style.visibility = "visible";
  document.getElementById("computer-opponent").style.visibility = "hidden";
  document.getElementById("player-opponent").style.visibility = "hidden";
  document.getElementById("explosion").style.visibility = "hidden";
  document.getElementById("new-game").style.visibility = "hidden";
  gameOver = false;
});


function gamePlay(playerSelection) {
  if (gameOver) {
    return;
  }

  let computerSelection = pieces[Math.floor(Math.random() * pieces.length)];
  let whoWon = new Map();
  whoWon.set("rockpaper", "computer");
  whoWon.set("rockscissors", "player");
  whoWon.set("paperrock", "player");
  whoWon.set("paperscissors", "computer");
  whoWon.set("scissorsrock", "computer");
  whoWon.set("scissorspaper", "player");
  whoWon.set("paperrock", "player");
  whoWon.set("scissorsrock", "computer");
  whoWon.set("rockpaper", "computer");
  whoWon.set("scissorspaper", "player");
  whoWon.set("rockscissors", "player");
  whoWon.set("paperscissors", "computer");

  let computerOpponent = document.getElementById("computer-opponent");
  let playerOpponent = document.getElementById("player-opponent");
  let winner =
    playerSelection === computerSelection
      ? "tie"
      : whoWon.get(playerSelection + computerSelection);

  switch (winner) {
    case "computer":
      winnerLabel.textContent = "Computer wins!";
      computerOpponent.src = "Images/happy-" + computerSelection + ".png";
      playerOpponent.src = "images/sad-" + playerSelection + ".png";
      computerScore++;
      document.getElementById("computer-score").textContent = computerScore;
      break;
    case "player":
      winnerLabel.textContent = "You win!";
      computerOpponent.src = "Images/sad-" + computerSelection + ".png";
      playerOpponent.src = "images/happy-" + playerSelection + ".png";
      playerScore++;
      document.getElementById("player-score").textContent = playerScore;
      break;
    case "tie":
      winnerLabel.textContent = "Tie!";
      computerOpponent.src = "Images/sad-" + computerSelection + ".png";
      playerOpponent.src = "images/sad-" + playerSelection + ".png";
      break;
  }

  document.getElementById(
    "computer-happy-" + computerSelection
  ).style.visibility = "hidden";
  document.getElementById("player-happy-" + playerSelection).style.visibility =
    "hidden";
  computerOpponent.style.visibility = "visible";
  playerOpponent.style.visibility = "visible";
  winnerLabel.style.visibility = "visible";
  document.getElementById("explosion").style.visibility = "visible";
  document.getElementById("new-game").style.visibility = "visible";
  gameOver = true;
}
