let n = 9;

switch (n) {
  case 1:
    console.log("You selected 1");
    break;
  case 2:
    console.log("You selected 2");
    break;
  case 3:
    console.log("You selected 3");
    break;
  case 4:
    console.log("You selected 4");
    break;
  case 5:
    console.log("You selected 5");
    break;
  case 6:
    console.log("You selected 6");
    break;
  default:
    console.log("The number you selected isnt a part of ....");
    break;
}

let soup = "Efo riro";
let reply;
let isUserBanned = false;

// if, else condition
// if (isUserBanned) {
//   reply = "Hey No food for you";
// } else if (soup) {
//   if (soup === "Efo riro") {
//     reply = "Here is your order of " + soup;
//   } else if (soup === "Okra Soup") {
//     reply = "Here is your order of " + soup;
//   } else {
//     reply = "Sorry we dont have the soup you requested for!!";
//   }
// } else {
//   reply = "Sorry you didnt request for a soup!!!";
// }
// console.log(reply);

if (isUserBanned) {
  reply = "Hey No food for you";
} else if (soup) {
  switch (soup) {
    case "Efo Riro":
      reply = "Here is your order of " + soup;
      break;
    case "Okra Soup":
      reply = "Here is your order of " + soup;
      break;
    default:
      reply = "Sorry we dont have the soup you requested for!!";
      break;
  }
} else {
  reply = "Sorry you didnt request for a soup!!!";
}

let playerOne = "rock";
let computer = "paper";

/*
if (playerOne === computer) {
  reply = "That is a draw!!";
} else if (playerOne === "rock") {
  if (computer === "scissors") {
    reply = "Player One wins!!";
  } else {
    reply = "computer wins !!!";
  }
} else if (playerOne === "paper") {
  if (computer === "rock") {
    reply = "Player One wins!!";
  } else {
    reply = "computer wins !!!";
  }
} else {
  if (computer === "paper") {
    reply = "Player One wins!!";
  } else {
    reply = "computer wins !!!";
  }
}
*/

switch (playerOne) {
  case computer:
    reply = "That is a draw!!";
    break;
  case "rock":
    if (computer === "scissors") {
      reply = "Player One wins!!";
    } else {
      reply = "computer wins !!!";
    }
    break;
  case "paper":
    if (computer === "rock") {
      reply = "Player One wins!!";
    } else {
      reply = "computer wins !!!";
    }
    break;
  default:
    if (computer === "paper") {
      reply = "Player One wins!!";
    } else {
      reply = "computer wins !!!";
    }
    break;
}

console.log(reply);

// ternerary operatory
// condition ? "do something" : condition2 ? "do something for condition 2 else" : ""

reply = isUserBanned
  ? "Sorry we can't serve you food"
  : soup === "Okra Soup"
  ? "Hello your Okra soup is on it way"
  : soup === "Efo riro"
  ? "Hello your Efo riro is on it way"
  : "Sorry the soup is not availale";

console.log(reply);

switch (playerOne) {
  case computer:
    reply = "That is a draw!!";
    break;
  case "rock":
    reply =
      computer === "scrissors" ? "Player One wins!!" : "computer wins !!!";
    break;
  case "paper":
    reply = computer === "rock" ? "Player One wins!!" : "computer wins !!!";
    break;
  case "scissors":
    reply = computer === "paper" ? "Player One wins!!" : "computer wins !!!";
    break;
}

console.log(reply);

// accepting information from user
// alert("Welcome to my web page");

let x;

// x = confirm("ok === true \n\ncancel === false ");
x = prompt("What is your name");

if (x) {
  console.log(x);
} else {
  console.log("You didnt provide any value");
}
