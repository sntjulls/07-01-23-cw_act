// ClassExtends
// Jan 25
// Створити клас Товар з властивостями: назва, ціна, валюта, кількість,
// і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).

// Створити дочірні класи Фізичний товар і Віртуальний товар, обидва походять від класу товар.
// У фізичного товара додається властивість вага.
// У віртуального товара додається властивість розмір пам'яті.
// Зміниться метод повернути інформацію про товар.

class Product {
  constructor(name, price, currency, quantity) {
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.quantity = quantity;
  }
  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("name must be string");
    }
    if (value.length === 0) {
      throw new RangeError("can not be empty");
    }
    this._name = value;
  }
  get name() {
    return this._name;
  }

  set price(value) {
    if (typeof value !== "number") {
      throw new TypeError("price must be number");
    }

    if (value < 0) {
      throw new RangeError("price can not be negative");
    }
    this._price = value;
  }
  get price() {
    return this._price;
  }

  set currency(value) {
    if (typeof value !== "string") {
      throw new TypeError("currency must be string");
    }
    if (value.length === 0) {
      throw new RangeError("can not be emplty");
    }
    this._currency = value;
  }
  get currency() {
    return this._currency;
  }

  set quantity(value) {
    if (typeof value !== "number") {
      throw new TypeError("quantity must be number");
    }

    if (value < 0) {
      throw new RangeError("quantity can not be negative");
    }
    this._quantity = value;
  }
  get quantity() {
    return this._quantity;
  }

  // і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).

  get aboutProduct() {
    return `Product name : ${this.name} - ${this.price} ${this.currency}, quantity: ${this.quantity}`;
  }
}

class PhysicalProduct extends Product {
  constructor(name, price, currency, quantity, weight) {
    super(name, price, currency, quantity);
    this.weight = weight;
  }
}

class VirtualProduct extends Product {
  constructor(name, price, currency, quantity, memorySize) {
    super(name, price, currency, quantity);
    this.memorySize = memorySize;
  }
}

// Figure3D
// Jan 27
// Створити "абстрактний" клас Figure3D з властивістю name (рядок не порожній)
// і методом обчислити об'єм.

// Створити класи нащадки: сфера, куб, циліндр.
// Обов'яково прописати сеттери та геттери для властивостей!
// Не забувати про виброс виключень.

// Використовувати конструкцію try/catch
// Створити по одному екземпляру кожного класу.

// Створити функцію showVolume3DFigure, яка приймає об'єкт і повертає рядок виду "[назва фигури] has volume: [значення об'єму].

class Figure3D {
  constructor(name) {
    if (this.constructor === Figure3D) {
      throw new Error("not create instance from Figure3D");
    }
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value === "string" && value.trim().length === 0) {
      throw new RangeError("name must not be empty");
    }
    this._name = value;
  }
  getVolume() {}
}

class Sphere extends Figure3D {
  constructor(radius) {
    super("sphere");
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
  getVolume() {
    return (4 / 3) * Math.PI * Math.pow(this._radius, 3);
  }
}

class Cube extends Figure3D {
  constructor(side) {
    super("cube");
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
  getVolume() {
    return this._side * this._side * this._side;
  }
}

class Cylinder extends Figure3D {
  constructor(height, radius) {
    super("cylinder");
    this.height = height;
    this.radius = radius;
  }
  get height() {
    return this._side;
  }
  set height(value) {
    if (typeof value !== "number") {
      throw new TypeError("height must be number");
    }
    if (value <= 0) {
      throw new RangeError("height must be positive");
    }
    this._height = value;
  }
  get radius() {
    return this._side;
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
  getVolume() {
    return this._height * Math.PI * this._radius * this._radius;
  }
}

function showVolume3DFigure(object) {
  if (object instanceof Figure3D) {
    console.log(`${object.name} has volume: ${object.getVolume()}`);
    return;
  }
  throw new TypeError("must be Figure3D");
}

try {
  const figure1 = new Sphere(10);
  const figure2 = new Cube(5);
  const figure3 = new Cylinder(14, 9);
  console.log(figure1.getVolume());
  console.log(figure2.getVolume());
  console.log(figure3.getVolume());
  showVolume3DFigure(figure1);
  showVolume3DFigure(figure2);
  showVolume3DFigure(figure3);
} catch (error) {
  console.log(error);
}
