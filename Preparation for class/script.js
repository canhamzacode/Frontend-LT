//Strings
const myVariable = "Mathematics";

const myNumber = 20;

let myName = "Hamzat";
let length = myName.length;

let randomIndex = Math.floor(Math.random() * length);
let randomWord = myName.charAt(randomIndex);

// Array challenge 1
const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
arr.reverse();

console.log(arr);

// Array challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 10];

arr1.pop();
console.log(arr1.concat(arr2));
console.log([...arr1, ...arr2]);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4, name: { alade: "Alani" } };

const obj3 = Object.assign({}, obj1, obj2); // ading both to an empty object to create a new object
const obj4 = Object.assign(obj1, obj2); // ading obj2 to obj1 to create a new object

const todos = [
  {
    id: 1,
    name: "Buy Milk",
  },
  {
    id: 2,
    name: "Pickup Kids from school",
  },
  {
    id: 3,
    name: "Take out trash",
  },
];

const todo = {
  id: 1,
  title: "Buy Milk",
  user: {
    name: "John",
  },
};

const { id, ...rest } = todo;

console.log(rest);

const names = ["brad", "sam", "sara", "john", "tim"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const evenNumbers = numbers.filter((number) => {
// return number % 2 === 0
// });

console.log(evenNumbers);
