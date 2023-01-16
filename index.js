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

// /**
//  *
//  * @param {number} userValue
//  * @returns {string}
//  */
// const input = prompt();
// const userValue = function (value) {
//   if (value % 2 === 0) {
//     return "even";
//   }
//   return "odd";
// };
// console.log(userValue(10));

// 2)написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, то повертає той, який має більше значення (якщо значення рівні - повертаємо null), інакше(якщо різного типу) теж повертає null.

// /**
//  *
//  * @param {any} argument1
//  * @param {any} argument2
//  * @returns {any || null}
//  */
// const getResult = function (argument1, argument2) {
//   if (typeof argument1 === typeof argument2) {
//     if (argument1 > argument2) {
//       return argument1;
//     }
//     if (argument1 === argument2) {
//       return null;
//     }
//   }
//   return null;
// };
// console.log(getResult("4", "9"));

// classwork 09.01.23

// const result2 = number1 >= number2 ? number1 : number2;

// /

// const number = 30;
// // дільники 5 3 2 1
// if (number % 5 === 0) {
//   console.log("multiple 5");
// } else if (number % 3 === 0) {
//   console.log("multiple 3");
// } else if (number % 2 === 0) {
//   console.log("multiple 2");
// } else if (number % 1 === 0) {
//   console.log("multiple 1");
// }

// const userInput = prompt("Choose month season");

// if (userInput === 12 || userInput === 1 || userInput === 2) {
//   console.log("winter");
// } else if (userInput === 3 || userInput === 4 || userInput === 5) {
//   console.log("spring");
// } else if (userInput === 6 || userInput === 7 || userInput === 8) {
//   console.log("summer");
// } else if (userInput === 9 || userInput === 10 || userInput === 11) {
//   console.log("fall");
// } else {
//   console.log("error");
// }

// switch (userInput) {
//   case "12":
//   case "1":
//   case "2":
//     console.log("winter");
//     break;
//   case "3":
//   case "4":
//   case "5":
//     console.log("spring");
//     break;
//   case "6":
//   case "7":
//   case "8":
//     console.log("summer");
//     break;
//   case "9":
//   case "10":
//   case "11":
//     console.log("fall");
//     break;
//   default:
//     console.log("error");
//     break;
// }

// користувач вводить число (prompt), яке є віком
// ви виводите класифікацію за віком
// [0-2) - baby
// [2-6) - kinder
// [6-12) - child
// [12-18) - teenager
// [18-65) - adult
// [65-100) - old
// [100-150) - wow!!!

// const userInputAge = prompt("Enter age");
// const userAge = Number(userInputAge);
// if (
//   userInputAge === null ||
//   userInputAge === "" ||
//   Number.isNaN(userAge) ||
//   userAge < 0 ||
//   userAge > 150
// ) {
//   console.log("error");
// } else if (userAge < 2) {
//   console.log("baby");
// } else if (userAge < 6) {
//   console.log("kinder");
// } else if (userAge < 12) {
//   console.log("child");
// } else if (userAge < 18) {
//   console.log("teenager");
// } else if (userAge < 65) {
//   console.log("adult");
// } else if (userAge < 100) {
//   console.log("old");
// } else if (userAge < 150) {
//   console.log("wow!!!");
// }

// const hour = 5;

/*
[10 -23] day
*/

// const word = hour >= 10 && hour < 23 ? "day" : "night";

//hw
// користувач вводить число, яке є номером дня місяця [1-31]
// ви виводите назву дня тижня,
// при у мові, що місяць почався з понеділка

// monday
// tuesday
// wednesday
// thursday
// friday
// saturday
// sunday

// const userInputDayNumber1 = prompt("Enter day number");

// switch (userInput) {
//   case "1":
//   case "8":
//   case "15":
//   case "22":
//   case "29":
//     console.log("monday");
//     break;
//   case "2":
//   case "9":
//   case "16":
//   case "23":
//   case "30":
//     console.log("tuesday");
//     break;
//   case "3":
//   case "10":
//   case "17":
//   case "24":
//   case "31":
//     console.log("wednesday");
//     break;
//   case "4":
//   case "11":
//   case "18":
//   case "25":
//     console.log("thursday");
//     break;
//   case "5":
//   case "12":
//   case "19":
//   case "26":
//     console.log("friday");
//     break;
//   case "6":
//   case "13":
//   case "20":
//   case "27":
//     console.log("saturday");
//     break;
//   case "7":
//   case "14":
//   case "21":
//   case "28":
//     console.log("sunday");
//     break;
//   default:
//     console.log("error");
//     break;
// }

// const userInputDayNumber = prompt("Enter day number");
// const userDayNaumber = Number(userInputDayNumber);
// if (
//   userDayNaumber === null ||
//   userDayNaumber === "" ||
//   Number.isNaN(userDayNaumber) ||
//   userDayNaumber < 1 ||
//   userDayNaumber > 31
// ) {
//   console.log("error");
// } else if (
//   userDayNaumber === 1 &&
//   userDayNaumber === 8 &&
//   userDayNaumber === 15 &&
//   userDayNaumber === 22 &&
//   userDayNaumber === 29
// ) {
//   console.log("monday");
// } else if (
//   userDayNaumber === 2 &&
//   userDayNaumber === 9 &&
//   userDayNaumber === 16 &&
//   userDayNaumber === 23 &&
//   userDayNaumber === 30
// ) {
//   console.log("tuesday");
// } else if (
//   userDayNaumber === 3 &&
//   userDayNaumber === 10 &&
//   userDayNaumber === 17 &&
//   userDayNaumber === 24 &&
//   userDayNaumber === 31
// ) {
//   console.log("wednesday");
// } else if (
//   userDayNaumber === 4 &&
//   userDayNaumber === 11 &&
//   userDayNaumber === 18 &&
//   userDayNaumber === 25
// ) {
//   console.log("thursday");
// } else if (
//   userDayNaumber === 5 &&
//   userDayNaumber === 12 &&
//   userDayNaumber === 19 &&
//   userDayNaumber === 26
// ) {
//   console.log("friday");
// } else if (
//   userDayNaumber === 6 &&
//   userDayNaumber === 13 &&
//   userDayNaumber === 20 &&
//   userDayNaumber === 27
// ) {
//   console.log("saturday");
// } else if (
//   userDayNaumber === 7 &&
//   userDayNaumber === 14 &&
//   userDayNaumber === 21 &&
//   userDayNaumber === 28
// ) {
//   console.log("sunday");
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let count = 0;
// while (true) {
//   if (count % 2 === 0) {
//     console.log(count);
//   }
//   count++;
//   if (count > 20) break;
// }

// while (true) {
//   if (count % 2) {
//     count++;
//     continue;
//   }
//   console.log(count++);
//   if (count > 6) break;
// }

// for (let i = 0; i < 6; i++) {
//   if (i % 2) continue;
//   console.log(i);
// }

// for (let i = 0; i <= 6; i += 2) {
//   console.log(i);
// }

// while (true) {
//   const userInput = prompt("Enter number");
//   if (
//     userInput === "" ||
//     userInput === null ||
//     Number.isNaN(Number(userInput))
//   ) {
//     console.log("try again");
//     continue;
//   }
//   console.log(userInput);
//   break;
// }

// const PIN = "1111";
// while (true) {
//   if (prompt("enter pin") === PIN) {
//     console.log("welcome");
//     break;
//   }
// }

// const PIN = "1111";
// const MAX_TRY = 3;

// 1 спосіб

//створити рахівник спроб
// let amount_try = 0;
// while (true) {
//   //перевіряти рахівник
//   if (amount_try >= MAX_TRY) {
//     console.log("atempts ended");
//     break;
//   }
//   if (prompt("enter pin") === PIN) {
//     console.log("welcome");
//     break;
//   }
//   console.log(MAX_TRY - amount_try);
//   //збільшили рахівник
//   amount_try++;
// }

// 2 спосіб
// for (let i = 0; i < MAX_TRY; i++) {
//   if (prompt("enter pin") === PIN) {
//     console.log("welcome");
//     break;
//   }
//   console.log(MAX_TRY - i - 1);
// }

// домашня робота 10.01.23
// while/for
// Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби
// зробити двома способами через while і for
// * це повинна бути функція(можливо і не одна)

// ********************* АКТУАЛ

function checkUserValue(userInput){
  if (userInput >= 15 &&  userInput <= 35 && userInput % 6 === 0){
    return true;
  }
}


// for (let i = 15; i <= 35; i++) {
//   if (i % 6 === 0) {
//     console.log(i);
//   }
// }

// let amount_try = 0;
// while (true) {
//   //перевіряти рахівник
//   if (amount_try >= MAX_TRY) {
//     console.log("atempts ended");
//     break;
//   }
//   if (prompt("enter pin") === PIN) {
//     console.log("welcome");
//     break;
//   }
//   console.log(MAX_TRY - amount_try);
//   //збільшили рахівник
//   amount_try++;
// }

function checkUserValue() {
  const MAX_TRY = 3;
  let amount_try = 0;
  while (amount_try < MAX_TRY) {
    amount_try++;
    const userInputNumber = prompt("Enter number");
    const correctNumber = Number(userInputNumber);
    if (correctNumber >= 15 && correctNumber <= 35 && correctNumber % 6 === 0) {
      return true;
    }
    if (
      userInputNumber === "" ||
      userInputNumber === null ||
      Number.isNaN(Number(correctNumber))
    ) {
      console.log("try again");
      break;
    }
    if (amount_try === MAX_TRY) {
      return false;
    }
  }
}

// while (true) {
//   if (amount_try++ >= MAX_TRY) {
//     console.log("used all attempts");
//     break;
//   }
//   if (
//     userInputNumber === "" ||
//     userInputNumber === null ||
//     Number.isNaN(Number(correctNumber))
//   ) {
//     console.log("try again");
//     break;
//   }
//   if (
//     userInputNumber >= 15 &&
//     userInputNumber <= 35 &&
//     userInputNumber % 6 === 0
//   ) {
//     console.log("welcome");
//     break;
//   }
//   console.log(MAX_TRY - amount_try);
//   // amount_try++;
// }

// amount_try++;

// *********************
// const MAX_TRY = 3;

// for (let i = 15; i <= 35; i++) {
//   if (i % 6 === 0) {
//     console.log(i);
//   }
// }

// *********************

// let amount_try = 0;
// const MAX_TRY = 3;
// while (true) {
// const userInputNumber = prompt("Enter number");
//   if (amount_try >= MAX_TRY) {
//     console.log("atempts ended");
//     continue; }
// if ((!userInputNumber >=15 && userInputNumber <= 35 && userInputNumber % 6 === 0) || userInputNumber === "" || userInputNumber === null || Number.isNaN(Number(userInputNumber))){
//   console.log('try again');
//   continue;
// }
//   console.log(userInput);
//   break;
// }

// *********************

// Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби

// зробити двома способами через while і for

// * це повинна бути функція(можливо і не одна)

// *********************

// let count = 0;
// while (count >=15 && count <= 35 && )
// let count = 0;
// while (true) {
//   if (count % 2 === 0) {
//     console.log(count);
//   }
//   count++;
//   if (count > 20) break;
// }

// (count >=15 && count <= 35 && count % 6 === 0)

// while (true) {
//   const userInput = prompt("Enter number");
//   if (
//     userInput === "" ||
//     userInput === null ||
//     Number.isNaN(Number(userInput))
//   ) {
//     console.log("try again");
//     continue;
//   }
//   console.log(userInput);
//   break;
// }

// 11.01.23 classwork
// створити обєкт продукт з властивостями: назва, ціна, валюта, наявність

// const product = {
//   name: "butter",
//   price: 5,
//   currency: "$",
//   isAvailable: true,
//   showInfo: function () {
//     console.log(product.name, product.price, product.currency);
//   },
// };
// product.showInfo();

// const product2 = {
//   name: "egg",
//   price: 5.5,
//   currency: "$",
//   isAvailable: true,
//   showInfo: function () {
//     console.log(product2.name, product2.price, product2.currency);
//   },
// };
// product2.showInfo();

// function Product(name, price, currency, isAvailable) {
//   // оголосити влістивість і ініціалізувати її
//   // product1.name = 'milk';
//   this.name = name;
//   this.price = price;
//   this.currency = currency;
//   this.isAvailable = isAvailable;
//   this.showInfo = function () {
//     return this.name + ":" + this.price + this.currency;
//   };
// }

// const product1 = new Product("milk", 55, "uah", true);
// const product2 = new Product("egg", 5.5, "uah", false);
// const product3 = new Product();

// console.log(product1);
// console.log(product2);
// console.log(product3);

// практична 1

// const userRegistration = {
//   login
//   email
//   password
// }

// function userRegistration(login, email, password){
//   this.login = login;
//   this.email = email;
//   this.password = password;
//  this.showInfo = function () {
//     return this.login + ' ' + this.password;
//   };
// }

// const User1 = new userRegistration ('user1', 'user1@gmail.com', '123456')
// const User2 = new userRegistration ('tom', 'user1@gmail.com', 'qwerty');
// const User3 = new userRegistration

// function User (login, email, password)
// this.login = login;
// this.email = email;
// this.password = password;
// this.showInfo = function(){
//   return this.login + ' ' + this.password;
// };

// const user1 = new User('user1', 'user1@gmail.com', '123456');
// const user2 = new User('user2', 'user2@gmail.com', 'qwerty');
// const user3 = new User('user3', 'user3@gmail.com', '123456qwerty');

// /**
//  *
//  * @param {string} name
//  * @param {number} population
//  * @param {number} area
//  */
// function Country(name, population, area) {
//   this.name = name;
//   this.population = population;
//   this.area = area;
//   this.getDensity = function () {
//     return this.population / this.area;
//   };
// }

// const country1 = new Country("Switzerland", 8700000, 41285);

// *******************

// function Auto(name, maxSpeed) {
//   this.name = name;
//   this.maxSpeed = maxSpeed;
//   this.currentSpeed = 0;
//   /**
//    *
//    * @returns {number}
//    */
//   this.stop = function () {
//     return (this.currentSpeed = 0);
//   };
//   /**
//    *
//    * @param {number} value
//    * @returns {number | false}
//    */
//   this.accelerate = function (value = 0) {
//     if (value < 0) {
//       return false;
//     }
//     this.currentSpeed += value;
//     if (this.currentSpeed >= this.maxSpeed) {
//       return (this.currentSpeed = this.maxSpeed);
//     }
//     return this.currentSpeed;
//   };
//   /**
//    *
//    * @param {number} value
//    * @returns {number | false}
//    */
//   this.deaccelerate = function (value = 0) {
//     if (value < 0) {
//       return false;
//     }
//     this.currentSpeed -= value;
//     if (this.currentSpeed <= 0) {
//       return (this.currentSpeed = 0);
//     }
//     return this.currentSpeed;
//   };
// }

// const car = new Auto("bmw", 270);
// console.log(car.accelerate(30));
// console.log(car.accelerate(350));
// console.log(car.deaccelerate(50));
// console.log(car.deaccelerate(500));

// *******************

// *******************
// addWater(value) //налий води
// makeTea(value)  //відлий воду
// turnOn()  //кип'яти
// /**
//  *
//  * @param {string} brand
//  * @param {value} maxVolume
//  * @param {value} minVolume
//  */
// function Cattle(brand, maxVolume, minVolume) {
//   this.brand = brand;
//   this.maxVolume = maxVolume;
//   this.minVolume = minVolume;
//   this.currentVolume = 0;
//   this.isOn = false;

//   this.turnOn = function () {
//     if (
//       this.currentVolume > this.minVolume &&
//       this.currentVolume < this.maxVolume
//     ) {
//       return (this.isOn = true);
//     }
//   };
//   this.addWater = function (value) {
//     if (this.currentVolume + value >= maxVolume) {
//       this.currentVolume = maxVolume;
//     } else {
//       this.currentVolume += value;
//     }
//     return this.currentVolume;
//   };
//   this.makeTea = function (value) {
//     if (this.currentVolume - value <= 0) {
//       this.currentVolume = 0;
//     } else {
//       this.currentVolume -= value;
//     }
//     return this.currentVolume;
//   };
// }
// const appliance = new Cattle("bosch", 2000, 500);
// console.log(appliance.addWater(100));
// console.log(appliance.addWater(100));
// console.log(appliance.addWater(100));
// console.log(appliance.makeTea(100));
// console.log(appliance.makeTea(100));
// console.log(appliance.addWater(100));
// console.log(appliance.addWater(100));
// console.log(appliance.addWater(100));
// console.log(appliance.addWater(100));
// console.log(appliance.turnOn());

// *********
// this.turnOn = function (value = 0) {
//   if (value < 0) {
//     return false;
//   }
//   this.currentVolume += value;
//   if (this.currentVolume >= this.maxVolume) {
//     return (this.currentVolume = this.maxVolume);
//   }
//   return this.currentVolume;
// };

// this.makeTea = function (value = 0) {
//   if (value < 0) {
//     return false;
//   }
//   this.currentVolume -= value;
//   if (this.currentVolume <= 0) {
//     return (this.currentVolume = 0);
//   }

//   if (this.currentVolume >= this.maxVolume) {
//   }
// };

// this.addWater = function (value = 0) {
//   if (this.currentVolume <= 0 && this.minVolume <= 0) {
//     return this.currentVolume;
//   }
// };
// console.log(turnOn(7));
// console.log(makeTea(8));
// console.log(addWater(0));

// ***********************************

// 12.01.23 classwork

// /**
//  *
//  * @param {number} number
//  * @param {number} MIN_VALUE
//  * @param {number} MAX_VALUE
//  * @returns {number}
//  */
// function showNumberOfRange (number, MIN_VALUE, MAX_VALUE){
//   return showNumberOfRange % number === 0;
// }

// console.log(showNumberOfRange(10))
// console.log(showNumberOfRange(30))
// console.log(showNumberOfRange(7))

// const number = 0;
// for (let i=0; i<5; i++){
//   console.log
// }

// const number
// const MIN_VALUE
// const MAX_VALUE

// function showNumberOfRange(min, max, number) {
//   for (let i = 30; i > 10; i--) {
//     if (i % number === 0) {
//       console.log(10);
//     }
//   }
// }

// /**
//  *
//  * @param {number} number1
//  * @param {number} number2
//  * @param {string} operator
//  * @returns
//  */
// function checkMath(number1, number2, operator) {
//   const example = number1 + operator + number2 + "=";
//   let result;
//   switch (operator) {
//     case "+":
//       result = number1 + number2;
//       break;
//     case "-":
//       result = number1 - number2;
//       break;
//     case "*":
//       result = number1 * number2;
//       break;
//     case "/":
//       result = number1 / number2;
//       break;
//     default:
//       alert("not found operator");
//       return;
//   }
//   while (true) {
//     const userAnswer = prompt(example);
//     if (userAnswer === "" || userAnswer === null) continue;
//     if (result === Number(userAnswer)) return;
//   }
// }
// checkMath(5, 2, "/");

// const user = {
//   firstName: "Brad",
//   lastName: "Pitt",
//   age: 59,
//   isMale: true,
// };
// const user2 = {
//   firstName: "Tom",
//   lastName: "Soyer",
//   age: 9,
//   isMale: true,
// };

// function isAdult(object, ADULT_AGE = 18) {
//   return object.age >= ADULT_AGE;
// }

// function sayHiUser(object) {
//   return `${isAdult(object) ? "Hello" : "Hi"},${object.firstName}!`;
// }

// console.log(sayHiUser(user));
// console.log(sayHiUser(user2));

// const table = {
//   '2 * 2 = ' : 4,
//   '2 * 2 = ' : 6,
// }

// function createTableMultiple() {
//   const table = {};
//   for (let num1 = 2; num1 <= 9; num1++) {}
//   for (let num2 = 1; num2 <= 10; num2++) {
//     table[`${num1} * ${num2} = `] = num1 * num2;
//   }

//   return table;
// }

// ***********************************

// 12.01.23 повтор

// function showNumberOfRange(number, MIN_VALUE, MAX_VALUE)
// for(let i=max; i>min; i--){
//   if(i % number === 0){
//     console.log(i)
//   }
// }

// console.log(showNumberOfRange(10));
// console.log(showNumberOfRange(30));
// console.log(showNumberOfRange(7));

// ***********************************

// /**
//  *
//  * @param {number} num1
//  * @param {number} num2
//  * @param {string} operator
//  */
// function checkMath(num1, num2, operator) {
//   const example = num1 + operator + num2 + "=";

//   let result;
//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     default:
//       alert("not found operator");
//       return;
//   }
//   while (true) {
//     const userAnswer = prompt(example);
//     if (userAnswer === "" || userAnswer === null) continue;
//     if (result === Number(userAnswer)) return;
//   }
// }

// checkMath(5, 2, "/");

// const user = {
//   firstName: "Brad",
//   lastName: "Pitt",
//   age: 59,
//   isMale: true,
// };

// const user2 = {
//   firstName: "Tom",
//   lastName: "Soyer",
//   age: 9,
//   isMale: true,
// };

// function isAdult(object, ADULT_AGE = 18) {
//   return object.age >= ADULT_AGE;
// }

// function sayHiUser(object) {
//   return `${isAdult(object) ? "Hello" : "Hi"},${object.firstName}!`;
// }

// console.log(sayHiUser(user));
// console.log(sayHiUser(user2));

// ************ додати в тг

// let n1 = 1;
// const n2 = 1;

// const res = n1;
// console.log(res);
// n1 = 15;
// console.log(res);

// const obj1 = {
//   prop: 1,
// };

// const obj2 = {
//   prop2: 1,
// };

// const test = obj1;
// const newObj = test;
// console.log(test);
// obj1.prop = 15;
// console.log(test);
// console.log(newObj);
// newObj.newProp = 'qwerty';

// ***********************************

// const product = {
//   name: "dress",
//   favoritColor: "teal",
//   "favorit color": "pink",
//   size: "S",
//   10: 55,
// };

// const keyName = 10;

// console.log(product[keyName]); //product 'favorit color'

// ***********************************

// const table = {
//   "2 * 2=": 4,
//   "2 * 3=": 6,
// };

// function createTableMultiple() {
//   const table = {};
//   for (let num1 = 2; num1 <= 9; num1++) {
//     for (let num2 = 1; num2 <= 10; num2++) {
//       table[${num1} * ${num2} =] = num1 * num2;
//     }
//   }
//   return table;
// }

// console.log(createTableMultiple())

// ***********************************

// function resolveExample(str, obj) {
//   return obj[str];
// }

// function createTableMultiple(limit = 2) {
//   const table = {};
//   for (let num1 = 2; num1 <= limit; num1++) {
//     for (let num2 = 1; num2 <= 10; num2++) {
//       table[`${num1} * ${num2} =`] = num1 * num2;
//     }
//   }
//   return table;
// }
// const multTable = createTableMultiple(10);

// console.log(createTableMultiple());

// console.log("5 * 6 = ", resolveExample("5 * 6 = ", multTable));

// ***********************************

// Cтворіть функцію конструктор Продукт з властивостями:
// назва(рядок), ціна(число), кількість(число - залишок на складі)

// Cтворіть функцію конструктор прототипу Продукту з функціоналом:
// showInfo() - повертає рядок з усіма данними
// setSaleToPrice(value=0) - встановлює знижку і повертає нову ціну
// buyAmountProduct(amountValue) - повертає загальну вартість покупки, якщо є достатня кількість, якщо не має повертаєте - null

// Не забути поєднати Продукт і його прототип!

// ***********************************
/** дз 13.01.22
 *
 * @param {string} name
 * @param {number} price
 * @param {number} quantity
 */

function ProductPrototype() {
  this.showInfo = function () {
    return;
  };
  this.setSaleToPrice = function (value = 0) {};
  this.buyAmountProduct = function (amountValue) {
    if (amountValue <= 0) {
      return false;
    }
    if (amountValue <= this.quantity) {
      return amountValue;
    }
    return null;
  };
}

function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

Product.prototype = new ProductPrototype();

// console.log(showInfo)

// const product1 = new Product();

// function showInfo(){

// }
// function setSaleToPrice (value = 0){

// };
// function buyAmountProduct (amountValue){

// };

// showInfo = function(){

// }
// setSaleToPrice = function (value = 0){

// };
// buyAmountProduct = function (amountValue){

// };
// console.log(product1)
// console.log(setSaleToPrice);

// showInfo();
// setSaleToPrice(value = 0);
// buyAmountProduct(amountValue);

// ***********************************

// 13.01.23 classwork

// object with logic (functions)
// const MyArrayPrototype = {};
// MyArrayPrototype.push = function (value) {
//   this[this.length] = value;
//   return ++this.length;
// };

// // constructor with data
// function MyArray() {
//   this.length = 0;
// }
// MyArray.prototype = MyArrayPrototype;

// const myArrayNumbers = new MyArray();
// const myArrayNumbers2 = new MyArray();
// myArrayNumbers.push(777);
// console.log(myArrayNumbers);
// console.log(myArrayNumbers.push === myArrayNumbers.push);

// const arrayNumbers = [];
// const arrayNumbers2 = new Array();
// arrayNumbers.push(555);
// console.log(arrayNumbers);
// console.log(arrayNumbers.push === arrayNumbers2.push)
