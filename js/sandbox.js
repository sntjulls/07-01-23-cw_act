"use strict";

// let value = 10;

// function log() {
//   console.log("function log:", value);
// }

// log();

// function wrapper() {
//   let value = 20;
//   console.log("function wrapper:", value);
// }

// wrapper();

// console.log("out functions:", value);

// *********************

let count = 100;
// function counter() {
//   count++;
//   return count;
// }

// function createCounter(initialValue = 0) {
//   let count = initialValue;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter1 = createCounter();
// const counter2 = createCounter(20);
// const counter3 = createCounter(50);

function createCounter(initialValue = 0) {
  let count = initialValue;
  return {
    increment() {
      return count++;
    },
    decrement() {
      return count--;
    },
  };
}

const counter1 = createCounter();
const counter2 = createCounter(200);

// *********************

// function createAdder(initialValue = 0){
//     let count = createAdder.length;;
//     return
// }

// const adder = createAdder(100)

// напишіть функцію, яка повертає іншу функцію,
// яка повертає суму усіх переданих значень. МІЙ ВАРІАНТ

// const adder = createAdder(100);
// adder(5)     // 105
// adder(21)    // 126
// adder(1)     // 127
// adder(100)   // 227

// function createAdder() {
//   return function sum (n) {
//     for (let i = 0; i < arguments.length; i++) {
//         count += arguments[i];
//       }
//     return count;
//   };
// }

// const adder = createAdder(100)
// console.log(adder(5));
// console.log(adder(21));
// console.log(adder(1));
// console.log(adder(100));

// ****************
// ВАРІАНТ ВЧИТЕЛЬКИ

// function createAdder(initialValue) {
// //   const result = initialValue;
//   return function (value) {
//     return (result += value);
//   };
// }

const createAdder = (initial) => (value) => (initial += value);

const adder = createAdder(100);
adder(15);
