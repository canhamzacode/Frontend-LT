let playGame = confirm("Shall we play rock, paper, scissors");
let reply;

if (playGame) {
  // play game
  let playerChoice = prompt("Pls enter rock , paper or scissors");
  if (playerChoice) {
    // game should commence
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      // game play
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      // back tick `` teplate literal
      console.log(`computer: ${computer}, Player one: ${playerOne}`);

      switch (playerOne) {
        case computer:
          reply = "That is a draw!!";
          break;
        case "rock":
          reply =
            computer === "scissors" ? "Player One wins!!" : "computer wins !!!";
          break;
        case "paper":
          reply =
            computer === "rock" ? "Player One wins!!" : "computer wins !!!";
          break;
        case "scissors":
          reply =
            computer === "paper" ? "Player One wins!!" : "computer wins !!!";
          break;
      }
    } else {
      alert("You didn't enter rock , paper, or scissors");
    }
  } else {
    alert("I guess you changed your mind!!");
  }
} else {
  alert("Okay Maybe Next time!!");
}

console.log(reply);
