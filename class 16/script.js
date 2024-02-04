let myString = "Abdulah Muhammad Caleb AbdulGaniy Derayo Maryam";

const stringLength = myString.length;
// console.log(stringLength);

// console.log(myString.charAt(stringLength - 3));

// console.log(myString.split(" "));

// Numbers and it methids

const myNumber = 42;
const myFloatNumber = 42.34;
const numberString = "42.455";

// console.log(Number.parseFloat(numberString));
// console.log(Number.parseInt(numberString));

// Math Method
// console.log(Math.max(5, 2, 4, 45, 2)); //2**5
// Math.floor
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log()

const userName = "Event Listener";
const indexNo = Math.floor(Math.random() * userName.length);
// console.log(userName.charAt(indexNo));

// Conditional Statements

let soup = "Okra Soup";
let reply;
let isUserBanned = false;

// if, else condition
// if (isUserBanned) {
//   reply = "Hey No food for you";
// } else if (soup) {
//   reply = "Here is your order of " + soup;
// } else {
//   reply = "Sorry We are out of soup!!";
// }
console.log(reply);

if (isUserBanned) {
  reply = "Hey No food for you";
} else {
  switch (soup) {
    case "Efo Riro": // Check for the specific soup value
      reply = "Here is your order of " + soup;
      break;
    case "Okra Soup":
      reply = "Here is your order of " + soup;
    default:
      reply = "Sorry We are out of soup!!";
      break;
  }
}

console.log(reply);

const grade = 49;
let result;
if (grade >= 70) {
  result = "A";
} else if (grade >= 60) {
  result = "B";
} else if (grade >= 50) {
  result = "C";
} else {
  result = "f";
}
console.log(result);

// Switch cases
