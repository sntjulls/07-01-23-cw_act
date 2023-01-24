// const arr1 = [1, 2, 3, 4, 3, 5, 3, 6, 3];

// const key = 3;
// console.log(arr1);
// console.log(arr1.indexOf(key, 3));
// console.log(arr1.lastIndexOf(key));

// const arr1 = [10, 20, 30, 40, 50, 60];
// const arr2 = [9, 8, 7];
// // const arr3 = arr1.slice(2, -2);
// // const key = 3;
// console.log(arr1);
// const arr3 = arr1.splice(2, 0, 77, 78);
// console.log(arr1);
// console.log(arr3);

// function hasElement(array, string) {
//   return array.includes(string);
// }
// console.log(hasElement(["qwe"], "qwe"));

// function sum() {
//   let summa = 0;
//   for (let index = 0; index < arguments.length; index++) {
//     summa += arguments[index];
//   }
//   return summa;
// }

// console.log(sum(1, 2, 3, 7));

// *********************

// /**
//  *
//  * @param {[number]} array
//  * @returns {number | null}
//  */
// function getAverage(array) {
//   if (array.length === 0) {
//     return null;
//   }
// let summa = 0;
//   for (let i = 0; i < array.length; i++) {
//     summa += array[i];
//   }
//   return summa / array.length;
// }

// *********************
// Use arguments in MyArrayPrototype

// function sum(){
//     let summa = 0;
//     for (let index = 0; index < arguments.length; index++) {
//       summa += arguments[index];
//     }
//     return summa;
//   }

//   console.log(sum(1,2,3,7))

// *********************

// Add example used methods array

// const arr1 = [10, 20, 30, 40, 50, 60];
// const arr2 = [1, 1, 1, 5];
// const summa = arr2.reduce(function (accumulator, currentValue, index) {
//   return accumulator + (index % 2 ? currentValue : 0);
// }, 1000);
// console.log(summa);
//const arr3 = arr1.concat(12,4,5)
//const arr3 = arr1.slice(2, -2)
//const key = 3;
// console.log(arr1);
// const arr3 = arr1.splice(2, 0, 77, 78, 79, 80);
// console.log(arr1);
// console.log(arr3);
// console.log(arr1.indexOf(key, 3));
// console.log(arr1.lastIndexOf(key));
// console.log(arr1.includes(key));

//написати функцію, яка буде приймати масив та рядок
//і повертати true, якщо рядок є в масиві
//і false, якщо рядку в масиві не має
//врахувати, що масив може бути порожнім!

// /**
//  *
//  * @param {[string]} arr
//  * @param {string} str
//  * @returns {boolean}
//  */
// function hasElement(arr, str) {
//   return arr.includes(str);
// }

//console.log(hasElement(["qwe"], "qwe"));

//написати функцію, яка приймає масив з числами,
//повертає середнє значення усіх елементів масива
// [2,4] => 3
//врахувати, що масив може бути порожнім - повертати null

// /**
//  *
//  * @param {[number]} arr
//  * @returns {number | null}
//  */
// function getAverage(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   // let summa = 0;
//   // for (let i = 0; i < arr.length; i++) {
//   //   summa = summa + arr[i];
//   // }
//   const summa = arr.reduce(function (resAccum, elem) {
//     return resAccum + elem;
//   });
//   return summa / arr.length;
// }
// Написати функцію, яка приймає масив чисел
// і повертає true, якщо в цьому масиві є два однакових числа поспіль
// Якщо не має - повертає false, якщо масив порожній - теж повертає false

// [1,2,3,4,5] false
// [1,2,2,3,2] true

// var arr = [3, 1, 1, 12];
// for (var i = 0; i > arr.length; i++) {
//   for (var j = i + 1; j > arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       alert("yes");
//     } else {
//       alert("no");
//     }
//   }

//   function check(a) {
//     for (var q=1; q<a.length; ++q) {
//       if (a[q] === a[q-1]) {
//         return true;
//       }
//     }

//     return false;
//   }

// спочатку правцюват на результат
// роблю - рещультат
// потім оптимізувати

// /**
//  *
//  * @param {[number]} array
//  * @returns {boolean}
//  */
// function identicalNumbersInRow(array) {
//   for (let i = 1; i < array.length; ++i) {
//     if (array[i] === array[i - 1]) {
//       return true;
//     }
//     return false;
//   }
// }

// console.log(identicalNumbersInRow([1, 2, 3, 4, 5]));
// console.log(identicalNumbersInRow([1, 2, 2, 3, 2]));

// /**
//  *
//  * @param {[number]} array
//  * @returns {boolean}
//  */
// function identicalNumbersInRow(array) {
//     for (let i = 1; i < array.length; i++) {
//       if (array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
//         return true;
//       }
//       return false;
//     }
//   }

//   console.log(identicalNumbersInRow([1, 2, 3, 4, 5]));
//   console.log(identicalNumbersInRow([1, 2, , 3, 2]));

// /**
//  *
//  * @param {[number]} array
//  * @returns {boolean}
//  */
// function identicalNumbersInRow(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         return true;
//       }
//       return false;
//     }
//   }
// }
// console.log(identicalNumbersInRow([1, 2, 3, 4, 5]));
// console.log(identicalNumbersInRow([1, 2, 2, 3, 2]));

// function identicalNumbersInRow(array) {
//   for (let i = 1; i < array.length; ++i) {
//     if (array[i] === array[i - 1]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(identicalNumbersInRow([1, 2, 3, 4, 5]));
// console.log(identicalNumbersInRow([1, 2, 2, 3, 2]));
//   /**
//    *
//    * @param {[number]} array
//    * @returns {number | null}
//    */
//   function getAverage(array) {
//     if (array.length === 0) {
//       return null;
//     }
//     let summa = 0;
//     for (let i = 0; i < array.length; i++) {
//       summa += array[i];
//     }
//     return summa / array.length;
//   }

// const users = [
//   { name: "Bob", age: 45 },
//   { name: "Rob", age: 22 },
//   { name: "Tom", age: 33 },
//   { name: "JD", age: 37 },
//   { name: "David", age: 54 },
//   { name: "Joe", age: 18 },
// ];

// users.forEach(function (user) {
//   user.isSuscribe = user.age > 35 ? true : false;
// });
// console.table(users);

// Написати функцію, яка приймає два масиви і повертає true, якщо ці масиви ідентичні, інакше повертає false

// const arr1 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 4];

// function AreArrTheSame(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++)
//     if (arr1[i].length === arr2[i].length || arr1.length === arr2.length) {
//       return true;
//     }
//   return false;
// }

// console.log(AreArrTheSame)

// /**
// //  *
// //  * @param {[number]} array
// //  * @returns {boolean}
// //  */
// function identicalNumbersInRow(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         return true;
//       }
//       return false;
//     }
//   }
// }
// console.log(identicalNumbersInRow([1, 2, 3, 4, 5]));
// console.log(identicalNumbersInRow([1, 2, 2, 3, 2]));

// function areArraysSame(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (var i = 0; i < arr1.length; i++) {
//     if (arr1[i] === arr2[i]) {
//       continue;
//     }
//     return false;
//   }
//   return true;
// }

// function areArraysSame(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++)
//     if (arr1.length === arr2.length&& arr1[i] === arr2[i]) {
//       return true;
//     }
//   return false;
// }

// console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
// console.log(areArraysSame([3, 2, 3, 4], [3, 2, 3, 4]));
// console.log(areArraysSame([6, 8, 3, 4], [3, 2, 3, 4]));

// arr1 = [1, 2, 3]
// arr2 = [1, 2, 4]

// console.log(arr1.indexOf())

function areArraysSame(arr1, arr2) {
  if (arr1.length != arr2.length) return false; // Мас­си­вы раз­ной дли­ны не рав­ны

  for (
    var i = 0;
    i < arr1.length;
    i++ // Цикл по всем эле­мен­там
  )
    if (arr1[i] !== arr2[i]) return false; // Ес­ли хоть один эле­мент от­ли­ча­ет­ся, мас­си­вы не рав­ны

  return true; // Ина­че они рав­ны
}
console.log(areArraysSame([1, 2, 3], [1, 2, "3"]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
console.log(areArraysSame([3, 2, 3, 4], [3, 2, 3, 4]));
console.log(areArraysSame([6, 8, 3, 4], [3, 2, 3, 4]));

