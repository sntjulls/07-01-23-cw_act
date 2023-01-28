"use strict";

// Створити новий клас RangeValidator, з полями from і to (from повинен бути менше за to)
// Тип данних для кожного поля - number
// Значення за замовчуванням - from=0 і to=10

// Реалізувати методи: setter & getter  для кожного поля
// Реалізувати метод get range, який буде повертати масив з двома полями одразу

// Реалізувати метод validate, який приймає значення(number) і повертає true, якщо значення входить в діапазон, якщо не входить - повертає false

// Обробляти помилки(виключення)
// Використовувати try/catch

class RangeValidator {
  constructor(from = 0, to = 10) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(value) {
    if (typeof value !== "number") {
      throw new TypeError("must be number");
    }
    if (value > this._to) {
      throw new TypeError("must be lower");
    }
    this._from = value;
  }
  get to() {
    return this._to;
  }
  set to(value) {
    if (typeof value !== "number") {
      throw new TypeError("must be number");
    }
    if (value < this._do) {
      throw new TypeError("must be higher");
    }
    this._to = value;
  }
  get range() {
    const array = [];
    array.push(this._from, this._to);
    return array;
  }
  validate(number) {
    if (typeof number !== "number") {
      throw new TypeError("must be number");
    }
    const array = [];
    for (let i = this._from; i <= this._to; i++) {
      array.push(i);
    }
    return array.includes(number);
  }
}
//     if (number < this.to && number > this.from) {
//       throw new RangeError("number must be in the range from 1 to 10");
//     }
//     return true;
//   }
// }

try {
  const range1 = new RangeValidator(5, 20);
  console.log(range1.validate(9));
} catch (error) {
  console.log(error);
}

// class RangeValidator {
//   constructor(from = 0, to = 10) {
//     this.from = from;
//     this.to = to;
//   }
//   get from() {
//     return this._from;
//   }
//   set from(value) {
//     if (typeof value !== "number") {
//       throw new TypeError("from must be number!");
//     }
//     if (value > this._to) {
//       throw new TypeError("from must be smaller!");
//     }
//     this._from = value;
//   }
//   get to() {
//     return this._to;
//   }
//   set to(value) {
//     if (typeof value !== "number") {
//       throw new TypeError("from must be number!");
//     }
//     if (value < this._from) {
//       throw new TypeError("to must be bigger!");
//     }
//     this._to = value;
//   }
//   get range() {
//     const arr = [];
//     arr.push(this._from, this._to);
//     return arr;
//   }
//   validate(number){
//     if (typeof number !== "number") {
//         throw new TypeError("Value must be number!");
//       }
//     const arr = [];
//     for (let i = this._from; i <= this._to; i++) {
//        arr.push(i);
//     }
//     return arr.includes(number);
//   }
// }

// try {
//   const range1 = new RangeValidator(2,30);
//   console.log(range1.validate(3));
// } catch (error) {
//   console.log(error);
// }
