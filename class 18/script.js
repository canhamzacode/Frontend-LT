// Array literal
let arr = [1, 2, 3, 4, 5, 6, 7, 8, "fdhd4"];
let x;

// array constructor
const fruit = new Array("apple", "mango", "pawpaw", "orange");
const berries = ["strawberry", "raspberry", "blueberry"];

// array methods
arr.push(70);
arr.pop();
arr.unshift("alabi");
arr.shift();
arr.reverse();
arr.reverse();

x = arr.includes("fdhd4");

x = arr.indexOf(88);

x = arr.slice(1, 5);

// splice

x = arr.splice(1);

// Nesting concatination and spread operators

// arr = [1, 2, 3, [4, 5, [9, 10, 11]], 6, [7, 8]];
arr = [1, 2, 3, [4, 5], 6, [7, 8]];

console.log(arr[5][1]);
// flat
console.log(arr.flat());

x = [...fruit, ...berries];

x = fruit.concat(berries);
console.log(x);

// console.log(Array.isArray(false));

// object
// object literal
const car = {
  name: "Toyota",
  color: "black",
  model: 2012,
  drive: function () {
    console.log("Drive my car");
  },
  user: {
    name: "Hamza",
    complexion: "dark",
  },
};

// delete car.color;

const newObj = {};
console.log(car);

// object constructor method
const obj = new Object({
  ade: "Toyota",
  olu: "somehting",
});

console.log({ ...obj, ...car });

x = Object.assign({}, obj, car);
console.log(x);

// destructuring of Object

console.log(car.name);
console.log(car.color);
console.log(car.model);

const { name, color } = car;

// const {
//     user: { name, complexion },
//   } = car;
//   console.log(name, complexion);

// destructuring of Array

const [first, second, ...rest] = arr;

console.log(rest.flat());
