"use strict";

//напишіть функцію стрілку, яка приймає безліч аргументів і повертає суму
//якщо викликаємо беp аргументів - повернути null
// const getSummaArgs = (...args) => {
//   if (args.length === 0) {
//     return null;
//   }
//   return args.reduce((acc, arg) => {
//     return acc + arg;
//   });
// };

// const getSummaArgs2 = (...args) =>
//   args.length === 0 ? null : args.reduce((acc, arg) => acc + arg);
// console.log(getSummaArgs());
// console.log(getSummaArgs(1, 2, 3));
// console.log(getSummaArgs2());
// console.log(getSummaArgs2(2, 3, 4));

// //напишіть функцію стрілку, яка приймає безліч аргументів і повертає середнє значення
// const getAverageArgs = (...args) =>
//   args.length === 0 ? null : args.reduce((acc, arg) => acc + arg) / args.length;

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(getSummaArgs(...numbers, 2, 5)); //spred
// console.log(getSummaArgs(2, 3));

// const arr1 = [9, 9, 9];

// const resultArray = [77, ...numbers, 88, ...arr1]; //spred

//написати функцію, яка приймає масив і повертає масив з двох значень, які є мінімальним і максимальним значенням джерельного масиву
//якщо джерельний масив порожній, то функція повертає порожній масив

// function max(list) {
//   return list.reduce((a, b) => a > b ? a : b);
// }

// console.log(max(1,3));

// const arr22 = [1, 2, 3, 4, 5];
// const getNewArr22 = (arr) =>
//   arr.reduce((acc, arg) => Math.max(...arr), Math.min(...arr));

//   const arr22 = [1, 2, 3, 4, 5];
// const getNewArr = (arr) => arr.reduce(
//     (accumulator, currentValue) => {
//       return [
//         Math.min(currentValue, accumulator[0]),
//         Math.max(currentValue, accumulator[1]),
//       ];
//     },
//     [Number.MAX_VALUE, Number.MIN_VALUE]
//   );
// console.log(getNewArr);

// const arr = [1, 2, 3, 4, 5];
// const getNewArr = (arr) =>
// arr.reduce((acc, arg) => Math.max(...arr), Math.min(...arr));

// console.log(getNewArr());
// console.log(getNewArr(1, 3));
// console.log(getNewArr(3, 4));

// const arr = [1, 2, 3, 4, 5];
// getNewArr = (arr) =>
//   arr.length === 0
//     ? arr
//     : arr.reduce((acc, arg) => Math.max(arr), Math.min(arr));
// console.log(getNewArr());
// console.log(getNewArr(1, 3));
// console.log(getNewArr(3, 4));

// *************
const arr = [1, 2, 3, 4, 5];

const getSum = (arr) => {
  if (arr.length === 0) {
    return "";
  }
  return [Math.min(...arr), Math.max(...arr)];
};

console.log(getSum(arr));

// const arr = [1, 2, 3, 4, 5];
// const LargestNum = arr.reduce((prev, curr) => {
//       return Math.max(prev, curr)
// });
// const MinNum = arr.reduce((prev,curr)=>{
//       return Math.min(prev,curr)
// });
// console.log(LargestNum, MinNum);

// const getSummaArgs33 = (...args) => {
//   if (args.length === 0) {
//     return null;
//   }
//   return args.reduce((acc, arg) => {
//     return acc + arg;
//   });
// };

// // АБО (АКТУАЛЬНИЙ)

// const getSummaArgs25 = (...args) =>
//   args.length === 0 ? null : args.reduce((acc, arg) => acc + arg);
// console.log(getSummaArgs());
// console.log(getSummaArgs(1, 2, 3));
// console.log(getSummaArgs2());
// console.log(getSummaArgs2(2, 3, 4));

// робочий
// const arr88 = [1, 2, 3, 4, 5];
// const LargestNum = arr88.reduce((prev, curr) => {
//       return Math.max(prev, curr)
// });
// const MinNum = arr88.reduce((prev,curr)=>{
//       return Math.min(prev,curr)
// });
// console.log(LargestNum, MinNum);

// 1)написати фукцію стрілку, яка приймає джерельний масив
// і повертає масив з двох значень,
// які є мінімальним і максимальним значенням джерельного масиву
// якщо джерельний масив порожній, то функція повертає порожній масив

// const minAndMaxNumbers =

// const arrOfNumbers = [1, 2, 3, 4, 5];

// const maxNumber = (a, b) => a > b ? a : b;
// const minNumber = (a, b) => a < b ? a : b;;

// console.log(arrOfNumbers.reduce(maxNumber));
// console.log(arrOfNumbers.reduce(minNumber));

// const arr11 = [1, 2, 3, 4, 5];

// const minAndMax = (arr) =>
//   arr.length === 0 ? null : arr.reduce((arr) => Math.max(...arr));

// console.log(arr11);

// const arr = [1, 2, 3, 4, 5];
// const LargestNum = arr.reduce((acc, arg) => Math.max(acc, arg));
// const MinNum = arr.reduce((acc, arg) => Math.min(acc, arg));
// console.log(LargestNum, MinNum);

//напишіть функцію стрілку, яка приймає безліч аргументів і повертає середнє значення

// 2)написати функцію стрілку, яка приймає безліч аргументів
// і повертає результат їх множення, якщо аргументів не має - повертає nul

// const getMultipleArgs = (...args) =>
//   args.length === 0 ? null : args.reduce((acc, arg) => acc * arg);

// console.log(getMultipleArgs(7, 2));

// function askUser(quetion){
//   const userInput = confirm(quetion);
//   if(userInput){
//   return 'ok';
//   }
//   return 'error';
//   }

//   userInput => ok

// const askUser1 = (quetion) => userInput  (quetion) => console.log('ok');

// const askUser2 = (quetion) => userInput confirm(quetion);
// if(userInput){
// return 'ok';
// }
// return 'error';

// console.log(Math.min, Math.max);

// const arr = [1, 2, 3, 4, 5];
// const getSum = (arr) =>
//   args.length === 0
//     ? null
//     : args.reduce((prev, curr) => Math.max(prev, curr), Math.min(prev, curr));

// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// const LargestNum = arr.reduce((prev, curr) => {
//       return Math.max(prev, curr)
// });
// const MinNum = arr.reduce((prev,curr)=>{
//       return Math.min(prev,curr)
// });
// console.log(LargestNum, MinNum);

// *************

// const getSummaArgs23 = (...args) =>
//   args.length === 0 ? null : args.reduce((acc, arg) => acc + arg);
// console.log(getSummaArgs23());
// console.log(getSummaArgs23(1, 2, 3));
// console.log(getSummaArgs23());
// console.log(getSummaArgs23(2, 3, 4));

//напишіть функцію стрілку, яка приймає безліч аргументів і повертає суму
//якщо викликаємо без аргументів - повернути null

// const getSummaArgs22 = (...args) =>
//   args.length === 0 ? null : args.reduce((acc, arg) => acc + arg);
// console.log(getSummaArgs());
// console.log(getSummaArgs(1, 2, 3));
// console.log(getSummaArgs2());
// console.log(getSummaArgs2(2, 3, 4));:

// let result = filter([1, 2, 3, 4, 5], function(elem) {
// 	if (elem % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// let result = filter([1, 2, 3, 4, 5],
// 	elem => elem % 2 == 0);

// 3)переписати функцію, що нижче на функцію стрілку
// function askUser(quetion){
// const userInput = confirm(quetion);
// if(userInput){
// return 'ok';
// }
// return 'error';

// const askUser3 = (quetion) => {
//   if (userInput (confirm))
// }

const askUser = (quetion) => (confirm(quetion) ? "ok" : "error");

console.log(askUser());

// ДОМАЩНЯ

// const arr = [1, 2, 3, 4, 5];
// const getSum = (arr) =>
//   args.length === 0 ? " " : Math.min(arr) && Math.min(arr);

// console.log(getSum);
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// const arr2 = [1, 2, 3, 4, 5];
// const getSum2 = (arr) =>
//   args.length === 0 ? " " : Math.min(arr) && Math.min(arr);

// const askUser = (quetion) => (confirm(quetion)) ? 'ok' : 'error';

// // }

// const askUser = (quetion) => userInput confirm (quetion) ? 'ok' : 'error';

// ОЦЕ
// const askUser = (quetion) => userInput(confirm(quetion)) ? 'ok' : 'error';

// function recursion(num) {
//   if (num === 0) {
//     return;
//   }
//   console.log(num);
//   recursion(num - 1);
// }
// recursion(4);

// написати рекурсивну функцію для обчислення факторіалу
// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1 * 0!
// 0! = 1

// const num1 = (base, exp) => {
//   if (exp === 0) {
//     return 1;
//   }
//   return base * num1(base, exp - 1);
// };

// console.log(num1(5, 4));

// const factorial = (n) => {
//   return n != 1 ? n * factorial(n - 1) : 1;
// };

// console.log(factorial(5));

// застосуйте try/catch для факторіалу
// 2**-3 = 1/2 * 2**-2
// ??????????????????? не зробила

// обробляємо помилки!
// виклик робимо в try/catch/

// написати рекурсивну функцію, яка приймає число і повертає рядок з вкладених пар круглих дужок.
// кількість пар дорівнює прийнятому аргументу.
// якщо число(аргумет) менше 1 - повертаємо лише одну пару круглих дужок
// //pairBrickets(4) => '(((())))'

// //pairBrickets(-4) => '()'
// //pairBrickets('qwe') => throw

// написати рекурсивну функцію, яка приймає два числа і повертає найбільший спільний дільник цих двох чисел
// // getDivider(24, 15) -> 3
// // getDivider(3, 3) -> 3
// // getDivider(7, 3) -> 1

// Алгоритм Евкліда дозволяє знайти НСД двох натуральних чисел.
// Суть алгоритму Евкліда – два числа порівнюють і від більшого віднімають менше до тих пір, поки числа не стануть рівними. Число, якому вони стануть рівними, і є їх найбільший спільний дільник.

// const number = new Number(22);
// console.log(number);
// if(0){
//   console.log(number);
// }
// console.log(number.toExponential);

// написати функцію, яка буде приймати рядок і формувати його до Jaden Case і повертати новий форматований рядок
// To Be Or Not To Be

// const str1 = 'tO bE OR nOT to Be'
// const strUpper = str1.toLowerCase().split().toUpperCase().join();

// console.log(strUpper);

const p = "The quick brown fox jumps over the lazy dog.";
if (p.includes(".")) {
  const posDote = p.indexOf(".");
  const pArr = p.substring(0, posDote).split(" ");

  console.log(pArr);
}

//написати функцію, яка буде приймати рядок і форматувати його до Jaden Case і повертати новий форматований рядок
//'To Be Or Not To Be'

function toJadenCase(str) {
  //перевести увесь рядок в маленькі букви toLowerCase
  const newStr = str.trim().toLowerCase();
  //розібрати рядок на окремі слова split - отримати масив слів
  const words = newStr.split(" ");
  //для кожного слова зробити першу літеру велику, а наступні маленькі
  const newWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  //з масиву зробити знову рядок join
  const readyStr = newWords.join(" ");
  //повернути цей рядок
  return readyStr;
}
const str = "    tO    bE OR    nOT to    Be     ";

function toJadenCase(str, separator = " ") {
  return str
    .trim()
    .toLowerCase()
    .split(separator) //array
    .filter((word) => word !== "")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(separator);
}
console.log(toJadenCase(str));

// написати функцію, яка приймає число
// і повертає рядок з вкладених пар круглих дужок
// кількість пар дорівнює прийнятому аргументу
// якщо число (аргумент) менше 1 - повертаємо лише одну пару круглих дужок
// обробляємо помилки!
// виклик робимо в try/catch
// pairBrickets(4) => '(((())))'
// pairBrickets(-4) => '()'
// pairBrickets('qwe') => throw

function pairBrickets(num, arg) {
  try {
    pairBrickets = arg.length;
    console.log(pairBrickets);
  } catch {
    console.log;
  } finally {
    console.log;
  }
}

// написати функцію, яка приймає рядок і повертає кількість голосних в рядку
// регістр не враховувати (рахувати і великі і маленькі голосні)
// працюємо тільки з латинецею
// const vowels = ['a', 'e', 'i', 'u', 'o', 'y'];

// спробувати оптимізувати функцію до одного ретурну (можна функцію-стрілку без ретурну взагалі)

const vowels = ["a", "e", "i", "u", "o", "y"];

const amountSymbols = (str, symbol = vowels) => {};
