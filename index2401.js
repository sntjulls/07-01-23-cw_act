// написати функцію, яка приймає рядок і повертає кількість голосних в рядку
// регістр не враховувати (рахувати і великі і маленькі голосні)
// працюємо тільки з латинецею
// const vowels = ['a', 'e', 'i', 'u', 'o', 'y'];
// не використовувати регулярні вирази!

// спробувати оптимізувати функцію до одного ретурну (можна функцію-стрілку без ретурну взагалі)
// const vowels11 = ["a", "e", "i", "u", "o", "y"];

// const amountSymbolsw = (string, symbols = vowels11) =>
//   string.split("").
//   filter((symbols) => "аоиеёэыуюя".includes(symbols)).length;

// console.log(amountSymbolsw("a", "e", "i", "u", "o", "y")); // 5

// const vowels = ["a", "e", "i", "u", "o", "y"];

// const vowels2 = [
//   "The freight train crashed into the passenger train at full speed",
// ];

// const amountSymbols = (string, symbols = vowels) => {
//   return string.toLowerCase().split("");
//   // .reduce((acc, cur) => (symbols.includes(cur) ? (acc += cur) : acc), "");
// };

// console.log(amountSymbols("a", "e", "i", "u", "o", "y"));
// // console.log(vowels);
// console.log(vowels.length);
// console.log(vowels2.length);

// var str = "hieeelalaooo"; //строка
// const vowels = ["a", "e", "i", "u", "o", "y"]; //гласные
// var i = 0;
// while (i < str.length) {
//   res += str[i];
//   if(vowels.indexOf(str[i]) > -1) {
//     i += 3;
//   } else {
//     i += 2;
//   }
// }
// console.log(res);

// console.log(findVowels('qwertyii'))
// console.log(findVowels('why')); // 0

// function findVowels(str) {
//   let count = 0;
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count += 1;
//     }
//   }

//   return count;

// }

// function getVowels(str, vowels = 'аеёиоуыэюя') {
//     return str
//       .toLowerCase()
//       .split('')
//       .reduce((acc, cur) => vowels.includes(cur) ? acc += cur : acc, '');
//   }

//   const vowels = getVowels('ехал грека через реку');
//   vowels // 'еаеаеееу'
//   vowels.length // 8

// const vowels11 = ['a', 'e', 'i', 'o', 'u'];
// const vowels12 = ['The', 'freight train crashed into the passenger train at full speed'];

// function getVowels(str, symbols = vowels11) {
//     return str
//       .toLowerCase()
//       .split('')
//       .reduce((acc, cur) => vowels11.includes(cur) ? acc += cur : acc, '');
//   }

//   console.log(vowels11.length)
//   console.log(vowels12.length)

// const vowels = ['a', 'e', 'i', 'o', 'u'];

//   function vowel_count(string, symbols = vowels) {

//     symbols.split().reduce((acc, cur) => (symbols.includes(cur) ? (acc += cur) : acc), "");
//   }

// //     for(var x = 0; x < string.length ; x++) {
// //       if (vowel_list.indexOf(symbols[x]) !== -1) {
// //         vcount += 1;
// //       }

// //     }
// //     return vcount;
// //   }
//   console.log(vowel_count('Web Development Tutorial')); //9

//   const vowels11 = getVowels('ехал грека через реку');

//  function vowel_count(str) {
//     vowels.reduce(function(accumulator, currentValue)){
//         return accumulator + currentValue;
//     }
//     var vcount = 0;
//  }
//     // for(var x = 0; x < str.length ; x++) {
//     //   if (vowels.indexOf(str[x]) !== -1) {
//     //     vcount += 1;

//     return vcount;

//   console.log(vowel_count('Wb Development Tutorial')); //9

// // написати функцію, яка приймає рядок і повертає кількість голосних в рядку
// // регістр не враховувати (рахувати і великі і маленькі голосні)
// // працюємо тільки з латинецею
// // const vowels = ['a', 'e', 'i', 'u', 'o', 'y'];
// // не використовувати регулярні вирази!

// // спробувати оптимізувати функцію до одного ретурну (можна функцію-стрілку без ретурну взагалі)

// const getVowels = (str, vowels = "aeiouy") => {
//   return str
//     .toLowerCase()
//     .split("")
//     .reduce((acc, cur) => (vowels.includes(cur) ? (acc += cur) : acc), "");
// };

// const vowels = getVowels("They should expect stormier weather ahead");

// console.log(vowels.length);


// Створити новий клас RangeValidator, з полями from і to (from повинен бути менше за to)
// Тип данних для кожного поля - number
// Значення за замовчуванням - from=0 і to=10 

// Реалізувати методи: setter & getter  для кожного поля
// Реалізувати метод get range, який буде повертати масив з двома полями одразу

// Реалізувати метод validate, який приймає значення(number) і повертає true, якщо значення входить в діапазон, якщо не входить - повертає false

// Обробляти помилки(виключення) 
// Використовувати try/catch