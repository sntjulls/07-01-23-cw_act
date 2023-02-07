"use strict";

function makeAnagram(a, b) {
  let result = 0;
  // const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const getCharCountMap = (str) => {
    const strArray = str.split("");
    let charMap = new Map();
    alphabets.forEach((alphabet) => charMap.set(alphabet, 0));
    strArray.forEach((letter) => charMap.set(letter, charMap.get(letter) + 1));
    return charMap;
  };

  const aMap = getCharCountMap(a);
  const bMap = getCharCountMap(b);

  alphabets.forEach((alphabet) => {
    result = result + Math.abs(aMap.get(alphabet) - bMap.get(alphabet));
  });

  return result;
}

console.log(makeAnagram("test", "text"));
console.log(makeAnagram("Mom", "omm"));
console.log(makeAnagram("asd", "Sad"));
console.log(makeAnagram("asd", "ssaadd"));
console.log(makeAnagram("ssaadd", "asd"));

// **************
// АКтуальн

const stripChar = (str) => {
  return str.replace(/[\W]/g, "").toLowerCase();
};
const charMap = (str) => {
  let MAP = {};
  for (let char of stripChar(str)) {
    !MAP[char] ? (MAP[char] = 1) : MAP[char]++;
  }
  return MAP;
};

const compare = (str1, str2) => {
  if (Object.keys(charMap(str1)).length !== Object.keys(charMap(str2)).length)
    return false;
  for (let char in charMap(str1)) {
    if (charMap(str1)[char] !== charMap(str2)[char]) return false;
  }
  return true;
};

console.log(compare("test", "text"));
console.log(compare("Mom", "omm"));
console.log(compare("asd", "Sad"));
console.log(compare("asd", "ssaadd"));
console.log(compare("ssaadd", "asd"));

// **************

function checkAnagramWithSort(str1, str2) {
  let newStr1 = str1.toLowerCase().replace(/[^a-z]/g, "");
  let newStr2 = str2.toLowerCase().replace(/[^a-z]/g, "");

  if (newStr1.length !== newStr2.length) {
    return false;
  }

  let hash1 = {};
  let hash2 = {};

  newStr1.split("").map((letter) => {
    hash1[letter] ? hash1[letter]++ : (hash1[letter] = 1);
  });

  newStr2.split("").map((letter) => {
    hash2[letter] ? hash2[letter]++ : (hash2[letter] = 1);
  });

  let hash1keys = Object.keys(hash1);
  let hash2keys = Object.keys(hash2);

  for (let i = 0; i < hash1keys.length; i++) {
    if (!hash2keys.includes(hash1keys[i])) {
      return false;
    }
    if (hash1[hash1keys[i]] !== hash2[hash1keys[i]]) {
      return false;
    }
  }

  return true;
}

console.log(checkAnagramWithSort("test", "text"));
console.log(checkAnagramWithSort("Mom", "omm"));
console.log(checkAnagramWithSort("asd", "Sad"));
console.log(checkAnagramWithSort("asd", "ssaadd"));
console.log(checkAnagramWithSort("ssaadd", "asd"));

// *************

const getStringMap = (str) => {
  const map = new Map();

  for (let char of str) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  return map;
};

const getCommonCount = (str1, str2) => {
  const map1 = getStringMap(str1);
  const map2 = getStringMap(str2);

  let commonCount = 0;

  for (let k of map1.keys()) {
    if (map2.has(k)) {
      commonCount += Math.min(map1.get(k), map2.get(k));
    }
  }

  return commonCount;
};

console.log(getCommonCount("test", "text"));
console.log(getCommonCount("Mom", "omm"));
console.log(getCommonCount("asd", "Sad"));
console.log(getCommonCount("asd", "ssaadd"));
console.log(getCommonCount("ssaadd", "asd"));

function compare1(arr1, arr2) {
  let map1 = new Map();
  let map2 = new Map();

  str1
    .trim()
    .toLowerCase()
    .split("")
    .forEach((letter) =>
      map1.has(letter)
        ? map1.set(letter, map1.get(letter) + 1)
        : map1.set(letter, 1)
    );

  // for (let word of arr1) {
  //   let sorted = word.toLowerCase().split("").sort().join(""); // (*)
  //   map1.set(sorted, word);
  // }

  // return Array.from(map1.values());

  // for (let word of arr2) {
  //   let sorted = word.toLowerCase().split("").sort().join("");
  //   map2.set(sorted, word);
  // }

  // return Array.from(map2.values());
}

console.log(compare("test", "text"));
console.log(compare("Mom", "omm"));
console.log(compare("asd", "Sad"));
console.log(compare("asd", "ssaadd"));
console.log(compare("ssaadd", "asd"));

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) );

// Напишіть функцію, яка приймає два рядки
// і повертає true, якщо з літер першого рядка можна скласти другий і навпаки
// false - якщо не можна

//compare('test', 'text') -> false
//compare('Mom', 'omm') -> true
//compare('asd', 'Sad') ->true
//compare('asd', 'ssaadd') ->false
//compare('ssaadd', 'asd') ->false

// const compareStrings = (string1, string2) => {
//   const map1 = new Map();
//   const map2 = new Map();
//   string1
//     .trim()
//     .toLowerCase()
//     .split("")
//     .forEach((letter) =>
//       map1.has(letter)
//         ? map1.set(letter, map1.get(letter) + 1)
//         : map1.set(letter, 1)
//     );
//   string2
//     .trim()
//     .toLowerCase()
//     .split("")
//     .forEach((letter) =>
//       map2.has(letter)
//         ? map2.set(letter, map1.get(letter) + 1)
//         : map2.set(letter, 1)
//     );
//   if (map1.size !== map2.size) {
//     return false;
//   }
//   for (const [letter, value] of map1) {
//     if (
//       map2.get(letter) !== value ||
//       (map2.get(letter) === undefined && map2.has(letter) === false)
//     ) {
//       return false;
//     }
//   }
//   return true;
// };

// const compareStrings = (string1, string2) => {
//   const map1 = new Map();
//   const map2 = new Map();
//   string1;
// };

console.log(compareStrings("test", "text"));
console.log(compareStrings("Mom", "omm"));
console.log(compareStrings("asd", "Sad"));
console.log(compareStrings("asd", "ssaadd"));
console.log(compareStrings("ssaadd", "asd"));

// compare.has("test", "text");
// compare.has("Mom", "omm");
// compare.has("asd", "Sad");
// compare.has("asd", "ssaadd");

// const letters = (str) => {
//   return (
//     str
//       .forEach()
//       .trim()
//       .toLowerCase()
//       .split(" ")
//       // .map((word) => (dictionary.has(word) ? dictionary.get(word) : word))
//       .join(" ")
//   );
// };

// console.log(sameLetters);
// console.log(letters);

// const dictionary = new Map();
// dictionary.set("dog", "пес");
// dictionary.set("cat", "кіт");
// dictionary.set("forest", "ліс");
// dictionary.set("rat", "щур");
// dictionary.set("field", "поле");
// dictionary.set("funny", "веселий");
// dictionary.set("sad", "сумний");
// dictionary.set("happy", "щасливий");
// dictionary.set("in", "у");
// dictionary.set("at", "в");
// dictionary.set("morning", "ранок");
// dictionary.set("go", "ідти");
// dictionary.set("jump", "стрибати");
// dictionary.set("walk", "гуляти");
// dictionary.set("talk", "розмовляти");
// dictionary.set("and", "і");

// const sentence = "In morning sad Dog and funny Cat go at forest.";

// const translate = (str) => {
//   return str
//     .trim()
//     .toLowerCase()
//     .split(" ")
//     .map((word) => (dictionary.has(word) ? dictionary.get(word) : word))
//     .join(" ");
// };

// console.log(translate(sentence));

// for (const iterator of dictionary.keys()) {
//     console.log(iterator)
// }

// console.log(...dictionary.keys());
// console.log(...dictionary.values());

// for (const [key, value] of dictionary.entries()) {
//   console.log(key, value);
// }

// const arrKeys = [...dictionary.keys()];
// const obj = { 1: 1 };
// const arr = [1, 1, 1, 1, 1, 4];
// const set1 = new Set(arr);
// set1.add(1);
// set1.add(1);
// set1.add(1);
// set1.add("1");
// set1.add(arrKeys);
// set1.add(arrKeys);
// set1.add([1]);
// set1.add(obj);
// set1.add(obj);
// set1.add(obj);
// console.log(set1);

// const arrUnique = [...new Set(arr).values()];

const user1 = {
  personalInfo: {
    id: 12,
    firstName: "Tom",
    lastName: "Qwerrty",
    bday: {
      day: 28,
      month: 6,
      year: 1987,
    },
    gender: "male",
  },
  contactInfo: {
    phone: "123-56-89",
    email: "qwe@gmail.com",
    address: {
      town: "NY",
      street: "Avenu 25",
      house: 2546,
    },
  },
  profession: "programmer",
};

// const userLastName = user.personalInfo.lastName;
// const userYearBorn = user.personalInfo.bday.year;
// const userEmail = user.contactInfo.email;
// const profession = user.profession;

// const {
// profession: userProf,
// contactInfo: { email: userEmail },
// personalInfo: {
//   lastName: userLastName,
//   bday: { year: userYearBorn },
// personalInfo: { gender: userGender },
// contactInfo: { phone: userTel, house: houseNumber, email },
// } = user;

// console.log(userProf);
// console.log(userEmail);
// console.log(userYearBorn);
// console.log(userLastName);

// console.log(userLastName);

// console.log(userGender);
// console.log(userTel);
// console.log(houseNumber);
// console.log(email);

// const logFullName = (
//   { personalInfo: { firstName, lastName }, ...restObject },
//   ...rest
// ) => {
//   console.log(firstName, lastName);
//   console.log(restObject);
//   console.log(rest);
// };
// logFullName(user, 1, 2, 3, 5, 7);

// const {
//   contactInfo: { email },
//   ...rest
// } = user;
// console.log(rest);

const user = {
  id: 1,
  privateInfo: {
    fname: "Brad",
    sname: "Pitt",
    bday: {
      day: 18,
      month: 12,
      year: 1963,
    },
    children: ["Helen", "Alex", "Georg", "Anna"],
  },
  contactInfo: {
    phone: {
      work: "123-12-45",
      mobile: "005-002-003",
    },
    adress: {
      town: "ZP",
      street: "12Avenu",
      house: 45,
    },
    mail: "brad@gmail.com",
  },
  profession: "actor",
};

// Створити змінні для року народження, імені другої дитини, робочого телефону.
// Бажано одинм рядком, використовуючи деструктуризацію.

// const logSecondChild = ({ privateInfo: { children: [Alex] } }) => {
//   console.log(children);
// };
// logSecondChild(user);

// const {
//   privateInfo: {
//     bday: { year: userYearBorn },
//     children: [, twoChild],
//   },
//   contactInfo: {
//     phone: { work: userWorkNumber },
//   },
// } = user;

// const logSecondChild = (user)=>{
//   console.log(user.privateInfo.children)
// }
// logSecondChild(user)

// const {
//   privateInfo: {
//     bday: { year: userYearBorn },
//     // children: userChildren,
//   },
//   contactInfo: {
//     phone: { work: userWorkNumber },
//   },
// } = user;

// const { text: [someText]} = { text: [' text'] };

// console.log(someText);

// const logFullName = (
//   { personalInfo: { firstName, lastName }, ...restObject },
//   ...rest
// ) => {
//   console.log(firstName, lastName);
//   console.log(restObject);
//   console.log(rest);
// };
// logFullName(user, 1, 2, 3, 5, 7);

// const {
//   contactInfo: { email },
//   ...rest
// } = user;
// console.log(rest);

// const [firstChild, secondChild, ...rest]
// const secondChild1 = children[1]

// console.log(secondChild1)

// const secondChild = (
//   {privateInfo: {children},  ...restObject}, ...rest ) => {
//   console.log(secondChild[1])}
//   secondChild()

// const secondChild = (
//   { privateInfo: {children: firstChild, secondChild}, ...restObject },
//   ...rest
// ) => {
//   console.log(firstChild, secondChild);
//   console.log(restObject);
//   console.log(rest);
// };
// logsecondChild(user, 1, 2, 3, 5, 7);

// const {
//   contactInfo: { email },
//   ...rest
// } = user;
// console.log(rest);

// console.log(userYearBorn);
// console.log(twoChild);
// console.log(userWorkNumber);
// // console.log(secondChild(1));

// console.log();

// const {
// profession: userProf,
// contactInfo: { email: userEmail },
// personalInfo: {
//   lastName: userLastName,
//   bday: { year: userYearBorn },
// personalInfo: { gender: userGender },
// contactInfo: { phone: userTel, house: houseNumber, email },
// } = user;
