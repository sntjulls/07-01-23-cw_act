// function toString() {
//   return "a cat named" + this.name;
// }
// function sleep() {
//   return this.name + "cat sleeping";
// }

// const catsProto = {
//   toString() {
//     return "a cat named" + this.name;
//   },
//   sleep() {
//     return this.name + "cat sleeping";
//   },
// };

// const cat1 = {
//   name: "Barsik",
// __proto__: catsProto
// };

// const cat2 = {
//   name: "Pushok",
//   toString,
//   sleep,
// };

// function CatsPrototype() {
//   this.toString = function () {
//     return "a cat named" + this.name;
//   };
//   this.sleep = function () {
//     return this.name + "is sleeping";
//   };
// }

// function Cat() {
//   this.name = name;
// }

// Cat.prototype = new CatsPrototype();

// const cat1 = new Cat("Muha");
// console.log(cat1.sleep());

// ************* домашка 14ю.09

// function ProductPrototype() {
//   this.showInfo = function () {
//     return;
//   };
//   this.setSaleToPrice = function (value = 0) {};
//   this.buyAmountProduct = function (amountValue) {
//     if (amountValue <= 0) {
//       return false;
//     }
//     if (amountValue <= this.quantity) {
//       return amountValue;
//     }
//     return null;
//   };
// }

// function ProductPrototype() {
//   this.showInfo = function () {
//     return;
//   };
//   this.setSaleToPrice = function (value = 0) {
//     if (this.price > 0) {
//       return;
//     }
//   };
//   this.buyAmountProduct = function (amountValue) {
//     if (amountValue <= this.quantity) {
//       if (amountValue <= 0) {
//         return false;
//       }
//       if (amountValue <= this.quantity) {
//         return amountValue;
//       }
//       return null;
//     }
//   };
// }

// function Product() {
//   this.name = name;
//   this.price = price;
//   this.quantity = quantity;
// }

// Product.prototype = new ProductPrototype();

// const product1 = new Product("Milk", 3, 10);
// console.log(product1.sleep());

// showInfo()
// setSaleToPrice()
// buyAmountProduct()

// 16.01.23 класна робота
// function hasString(array, string) {
//   return array.includes(string);
// }

// console.log(hasString(["qwe"], "qwe"));

// ****************

// /**
//  *
//  * @param {[number]} array
//  * @returns {number | null}
//  */
// function getAverage(array) {
//   if (array.length === 0) {
//     return null;
//   }
//   //   let summa = 0;
//   //   for (let index = 0; index < array.length; index++) {
//   //     summa += array[index];
//   //   }
//   const summa = array.reduce(function (resAccum, elem) {
//     return resAccum + elem;
//   });
//   return summa / array.length;
// }

// const arr1 = [1,2,3,4,9,6,7];
// console.log(arr1);
// const result1 = arr1.reverse();
// console.log(arr1);
// console.log(result1);

// function getArrayByRange(min, max, step = 1) {
//   const arr = [];
//   for (let i = min; i <= max; i += step) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(getArrayByRange(3, 18, 5));

// const users = [
//   { name: "Brad", age: 59 },
//   { name: "Tom", age: 44 },
//   { name: "Alex", age: 35 },
//   { name: "Rob", age: 22 },
//   { name: "Bob", age: 36 },
// ];

// const userName = users.find(checkAge).name;
// console.log(userName);

// const validateUsers = users.filter(function (user) {
//   return user.age < 30;
// });

// // for (let index = 0; index < users.length; index++) {
// //   if (checkAge(users[index])) {
// //     validateUsers.push(users[index]);
// //   }
// // }
// console.log(validateUsers);

// function checkAge(currentElement) {
//   return currentElement.age < 30;
// }

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const summaEvenValues = arr1
//   .filter(function (elem) {
//     return elem % 2 === 0;
//   })
//   .reduce(function (accum, elem) {
//     return accum + elem;
//   });
// console.log(summaEvenValues);

// const key = 3;
// const arr1 = [1, 2, 3, 4, 3, 6, 3, 8, 9, 3, 3];
// const countKey = arr1.filter(function (elem) {
//   return elem === key;
// }).length;

// const notEmptyValueArray = arr1.filter(function (elem) {
//   return elem;
// });

// const users = [
//   { name: "Bob", age: 45 },
//   { name: "Rob", age: 22 },
//   { name: "Tom", age: 33 },
//   { name: "JD", age: 37 },
//   { name: "Dave", age: 29 },
// ];

// додати нову властивість юзеру
// +++ встановити true у Subscribe, якщо вік юзера > 35

// users.forEach(function (user) {
//   user.isSubscribe = user.age > 35 ? true : false;
// });
// console.table(users);

// // Написати функцію, яка приймає два масиви і повертає true, якщо ці масиви ідентичні, інакше повертає false

// const arr1 = [1, 2, 3, 4];
// const arr2 = arr1.slice(0);

// function isEqualArrays(arr1, arr2) {
//   if (arr1.lenght !== arr2.lenght) {
//     return false;
//   }
//   return !arr1
//     .map(function (elem, index) {
//       return elem === arr2[index];
//     })
//     .includes(false);
// }

function User(firstName, lastName, age, isMale, email, isSubscribe = false) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribe = isSubscribe;
}

function UserPrototype() {
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
User.prototype = new UserPrototype();

function createUsers(amount = 1) {
  const db = [];
  for (let i = 0; i < amount; i++) {
    const user = new User(
      `firstName${i + 1}`,
      `lastName${i + 1}`,
      getRandomArbitrary(18, 65),
      Math.random() > 0.5,
      `email${i + 1}@gmail.com`
    );
    db.push(user);
  }
  return db;
}

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min);
}

const CHECK_AGE = 35;

const users = createUsers(100);

//отримати масив юзерів, які будуть старші за CHECK_AGE
const olderUsers = users.filter(function (user) {
  return user.age > CHECK_AGE;
});

//зарандомити підписку у користувачів
users.forEach(function (user) {
  user.isSubscribe = Math.random() > 0.5;
});
console.table(users);

//отримати масив пошт користувачів жіночої статі, які молодше CHECK_AGE і мають підписку
const usersEmail = users
  .filter(function (user) {
    return user.isMale === false && user.isSubscribe && user.age < CHECK_AGE;
  })
  .map(function (user) {
    return user.email;
  });

console.table(usersEmail);

//отримати масив повних імен користувачів
const fullNameUserArray = users.map(function (user) {
  return user.getFullName();
});
// console.log(fullNameUserArray)

//порахувати кількість жінок/чоловіків
console.log(
  "male = ",
  users.filter(function (user) {
    return user.isMale;
  }).length
);
console.log(
  "female = ",
  users.filter(function (user) {
    return !user.isMale;
  }).length
);
