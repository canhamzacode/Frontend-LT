let soup = "Okra Soup";
let reply;
let isUserBanned = false;

if (isUserBanned) {
  reply = "Hey No food for you";
} else {
  switch (soup) {
    case "Efo Riro": // Check for the specific soup value
      reply = "Here is your order of " + soup;
      break;
    case "Okra Soup":
      reply = "Here is your order of " + soup;
      // while preparing for the class i noticed that in the last class I forgot to add the break statement below
      break;
    default:
      reply = "Sorry We are out of soup!!";
      break;
  }
}

console.log(reply);

if (isUserBanned) {
  reply = "Hey No food for you";
} else {
  if (soup === "Efo Riro") {
    reply = "Here is your order of " + soup;
  } else if (soup === "Okra Soup") {
    reply = "Here is your order of " + soup;
  } else {
    reply = "Sorry We are out of soup!!";
  }
}
console.log(reply);

let childResult = 61;
let data =
  childResult >= 70
    ? "You did very well"
    : childResult >= 60
    ? "You can do better"
    : "The result wasnt too good";

console.log(data);

// let = confirm("Omo Ogbon");

let playGame = confirm("Shall we play rock, paper, or scissors");
if (playGame) {
  // play
  let playerChoice = prompt("Please enter rock, paper or scissors");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);

      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      //   condition to determine the winner
      switch (playerOne) {
        case computer:
          console.log("We have got a tie");
          break;
        case "rock":
          console.log(
            computer === "scissors" ? "Player One wins" : "computer wins"
          );
          break;
        case "paper":
          console.log(
            computer === "rock" ? "Player One wins" : "computer wins"
          );
          break;
        case "scissors": // Assuming this is the only remaining possibility no nned for default in this usecase
          console.log(
            computer === "paper" ? "Player One wins" : "computer wins"
          );
          break;
      }
    } else {
      alert("You didnt enter rock, paper or scissors");
    }
  } else {
    alert("I guess you changed your mind maybe next time");
  }
} else {
  alert("Okay, maybe next time.");
}

// rock paper scissors logic with if else statement
// let playerOne = "paper";
// let computer = "scissors";

// if (playerOne === computer) {
//   console.log("We have got a tie");
// } else if (playerOne === "rock") {
//   if (computer === "scissors") {
//     console.log("Player one wins");
//   } else {
//     console.log("computer wins");
//   }
// } else if (playerOne === "paper") {
//   if (computer === "rock") {
//     console.log("Player one wins");
//   } else {
//     console.log("computer wins");
//   }
// } else {
//   if (computer === "paper") {
//     console.log("Player one wins");
//   } else {
//     console.log("computer wins");
//   }
// }

// rock paper scissors logic with switch case and if else statements

/* 
switch (playerOne) {
  case computer:
    console.log("You have got a tie");
    break;
  case "rock":
    if (computer === "scissors") {
      console.log("Player One wins");
    } else {
      console.log("computer wins");
    }
    break;
  case "paper":
    if (computer === "rock") {
      console.log("Player one wins");
    } else {
      console.log("computer wins");
    }
    break;
  default:
    if (computer === "paper") {
      console.log("Player one wins");
    } else {
      console.log("computer wins");
    }
    break;
}
*/

// rock paper scissors using switch case and terneray operator

/* 
switch (playerOne) {
  case computer:
    console.log("We have got a tie");
    break;
  case "rock":
    console.log(computer === "scissors" ? "Player One wins" : "computer wins");
    break;
  case "paper":
    console.log(computer === "rock" ? "Player One wins" : "computer wins");
    break;
  case "scissors": // Assuming this is the only remaining possibility
    console.log(computer === "paper" ? "Player One wins" : "computer wins");
    break;
}
*/
