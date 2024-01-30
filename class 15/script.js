console.log("Hello ");

/**
 * Variables In Javascript
 * 1. var
 * 2. Let
 * 3. const
 */

var fistName = "Abdul-Muizz";
const age = 10;

// Var
var className = "Front end Learning Track";
var newVariable = "Portable";

// var newVariable = "MNXN";
// {
//   var omoLomo = "ade";
// }

// Let

let color = "red";
color = "pink";
function print() {
  console.log(color);
}

{
  let a = 2;
}
print();

// const
const myVariable = "Alani";

// Operators In Javascript
/**
 * Assignment Operator (=)
 * Addition Operator (+)
 * Multiplication Operator (*)
 * Division
 * Comparism Operator
 * exponential operator (**)
 * increment (++)
 * decrement (--)
 * modulus (%)
 */

let myAge, mySisAge;
console.log(myAge);
myAge = 10;
mySisAge = 4;
// let sum = myAge + mySisAge;
// let subtaction = myAge - mySisAge;

// myAge = myAge + 3;
myAge += 3;
console.log(myAge);

myAge -= 3;
console.log(myAge + "8");

const numberVariable = 10;
const something = 10;

// concatination
console.log(numberVariable == something);
let solution = numberVariable !== something;
console.log(typeof color);

/**
 * Data Types In Javscript
 * String
 * Number
 * Boolean
 * Undefined
 * Null
 * Object (Object, Array)
 */

function myFunction(userName, age) {
  // Task TO be performed
  return "My Name is: " + userName + " and i am " + age + " years old";
}
// void (Function that doesnt have a return value)

let classWork = myFunction("Abdullah", myAge);

console.log(classWork);

// invoke function
(function selfInvoke() {
  console.log("Self Invode");
})();

// DOM Document Object Model

// Object
const myCar = {
  name: "Hilux",
  wheels: 5,
  color: "black",
  vibe: function () {
    return "I just got " + this.name + " with " + this.wheels + " wheels";
  },
};

// dot notation
console.log(myCar.vibe());
// bracket notation
console.log(myCar["color"]);
