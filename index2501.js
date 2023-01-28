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

  set from(value) {
    if (typeof value !== "number") {
      throw new TypeError("must be number");
    }
  }
  get from() {
    return this._from;
  }

  set to(value) {
    if (typeof value !== "number") {
      throw new TypeError("must be number");
    }
  }
  get to() {
    return this._to;
  }
  range(){
    return this.from + to;
  }
}




// }
// buy() {
//   return this.name + " is buy";
// }
// static isUser(obj) {
//   return obj instanceof User;
// }
// }

// *************

// class Animal {
//   constructor(name, type, amountLib) {
//     this.name = name;
//     this.type = type;
//     this.amountLib = amountLib;
//   }
//   set name(value) {
//     if (typeof value !== "string") {
//       throw new TypeError("name must be string!");
//     }
//     if (value.length === 0) {
//       throw new RangeError("not empty");
//     }
//     this._name = value;
//   }
//   get name() {
//     return this._name;
//   }
//   eat() {
//     return this.name + " is eating";
//   }
//   static isAnimal(obj) {
//     return obj instanceof Animal;
//   }
// }

// try {
//   const cat = new Animal("Muha", "cat", 4);
//   console.log(Animal.isAnimal(cat));
//   console.log(Animal.isAnimal({ cat: "cat" }));
// } catch (error) {
//   console.log(error);
// }

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("name must be string!");
    }
    if (value.length === 0) {
      throw new RangeError("not empty");
    }
    this._name = value;
  }
  get name() {
    return this._name;
  }
  set age(number) {
    if (typeof number !== "string") {
      throw new TypeError("name must be number!");
    }
    if (value < 14 || value > 100) {
      throw new RangeError("14...100");
    }
    this._age = value;
  }
  get age() {
    return this._age;
  }
  buy() {
    return this.name + " is buy";
  }
  static isUser(obj) {
    return obj instanceof User;
  }
}

try {
  const cat = new Animal("Muha", 34);
  console.log(Animal.isAnimal(cat));
  console.log(Animal.isAnimal({ cat: "cat" }));
} catch (error) {
  console.log(error);
}

// ***********************
// 27.01.23 classwork

/*
  інкапсуляція (абстракція)
  успадкування
  поліморфізм
*/

function logPerimetrFigure(figure) {
  if (figure instanceof Figure) {
    console.log(figure.name, " perimetr = ", figure.getPerimetr());
    return;
  }
  throw new TypeError("instance must be extends Figure");
}

class Figure {
  constructor(name) {
    if (this.constructor === Figure) {
      throw new Error("Not create instance from Figure!");
    }
    this.name = name;
  }
  getPerimetr() {}
  getArea() {}
}

class Circle extends Figure {
  constructor(radius) {
    super("circle");
    this.radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (typeof value !== "number") {
      throw new TypeError("radius must be number");
    }
    if (value <= 0) {
      throw new RangeError("radius must be positive");
    }
    this._radius = value;
  }
  getPerimetr() {
    return 2 * Math.PI * this._radius;
  }
  getArea() {
    return Math.PI * this._radius * this._radius;
  }
}

class Square extends Figure {
  constructor(side) {
    super("square");
    this.side = side;
  }
  get side() {
    return this._side;
  }
  set side(value) {
    if (typeof value !== "number") {
      throw new TypeError("side must be number");
    }
    if (value <= 0) {
      throw new RangeError("side must be positive");
    }
    this._side = value;
  }
  getPerimetr() {
    return 4 * this._side;
  }
  getArea() {
    return this._side * this._side;
  }
}

class Triangular extends Figure {
  constructor(a, b, c) {
    super("triangular");
    this.setSides(a, b, c);
  }
  setSides(a, b, c) {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      typeof c !== "number"
    ) {
      throw new TypeError("side must be number");
    }
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new RangeError("side must be positive");
    }
    if (a + b > c && b + c > a && a + c > b) {
      this._a = a;
      this._b = b;
      this._c = c;
      return;
    }
    throw new RangeError("side must be right");
  }
  get a() {
    return this._a;
  }
  get b() {
    return this._b;
  }
  get c() {
    return this._c;
  }
  getPerimetr() {
    return this._a + this._b + this._c;
  }
  getArea() {
    //formula Gerona
  }
}

// const figure0 = new Figure('figure');
// console.log(figure0.getPerimetr());

const figure1 = new Circle(10);
figure1.radius += 2;

const figure2 = new Square(10);
figure2.side += 2;

const figure3 = new Triangular(3, 4, 5);

logPerimetrFigure(figure1);
logPerimetrFigure(figure2);
logPerimetrFigure(figure3);

class Button {
  constructor() {}
  createButton() {}
}
class WinButton extends Button {
  constructor() {
    super();
  }
  createButton() {
    //realization at win
  }
}
class UnixButton extends Button {
  constructor() {
    super();
  }
  createButton() {
    //realization at unix
  }
}
class MacButton extends Button {
  constructor() {
    super();
  }
  createButton() {
    //realization at mac
  }
}
