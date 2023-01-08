// /**
//  *
//  * @param {number} number
//  * @returns {boolean}
//  */
// function isEven(number) {
//     return number % 2 == 0;
//   }
//   console.log(isEven(7));
//   console.log(isEven(22));

// 1 практична 07.01
// /**
//  *
//  * @param {number} age
//  * @param {number} FULL_AGE default value = 18
//  * @returns {boolean}
//  */
// const isAdult = function (age, FULL_AGE = 18) {
//   return age >= FULL_AGE;
// };
// const userAge = 45;
// console.log(isAdult(18, 21));
// console.log(userAge);
// console.log(isAdult(22));

// 2 практична 07.01
// /**
//  *
//  * @returns {string | null}
//  */
// const getUserInput = function () {
//   const input = prompt(); //'string'
//   if (input) {
//     return input;
//   }
//   return null;
// };

// // 3 практична 07.01
// const number1 = 45;
// const number2 = 24;
// /**
//  *
//  * @param {number} number1
//  * @param {number} number2
//  * @returns {boolean}
//  */
// const isMultiplicity = function (number1, number2) {
//   return number1 % number2 === 0;
// };

// if (Number.isInteger(number1) && Number.isInteger(number1)) {
//   console.log(isMultiplicity(number1, number2));
// } else {
//   console.log("number must be integer");
// }

// 4 практична 07.01
// a + b> c, a + c> b, b + c> a, (a> 0, b> 0, c> 0)
// /**
//  *
//  * @param {number} value1
//  * @param {number} value2
//  * @param {number} value3
//  * @returns {boolean}
//  */
// const isTriangleExist = function (value1, value2, value3) {
//   return (
//     value1 > 0 &&
//     value2 > 0 &&
//     value3 > 0 &&
//     value1 + value2 > value3 &&
//     value1 + value3 > value2 &&
//     value3 + value2 > value1
//   );
// };

// 5 практична 07.01
// /*
//  *
//  * @param {number} number1
//  * @param {number} number2
//  * @returns {number}
//  */
// const getResult = function (number1, number2) {
//   if (number1 % 2 === 0, number2 % 2 === 0) {
//     return number1 + number2;
//   }
//   if (number1 % 2 && number2 % 2) {
//     return number1 * number2;
//   }
//   if (number1 % 2) {
//     return number1;
//   }
//   return number2;
// };

// домашня робота 07.01
// 1) написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач.

/**
 *
 * @param {number} number
 * @returns {string}
 */
const userValue = function (number) {
  const input = prompt();
  if (input) {
    return odd;
  }
  return even;
};

// 2)написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, то повертає той, який має більше значення (якщо значення рівні - повертаємо null), інакше(якщо різного типу) теж повертає null.

/**
 *
 * @param {number} argument1
 * @param {number} argument2
 * @returns {null}
 */
const getResult = function (argument1, argument2) {
  if (typeof argument1 === typeof argument2) {
    return argument1 > argument2 || argument2 > argument1;
  }
};
if ((argument1 = argument2)) {
  return null;
}
if (!typeof argument1 === typeof argument2) return null;

// /*
//  *
//  * @param {number} number1
//  * @param {number} number2
//  * @returns {number}
//  */
// const getResult = function (number1, number2) {
//   if (number1 % 2 === 0, number2 % 2 === 0) {
//     return number1 + number2;
//   }
//   if (number1 % 2 && number2 % 2) {
//     return number1 * number2;
//   }
//   if (number1 % 2) {
//     return number1;
//   }
//   return number2;
// };
