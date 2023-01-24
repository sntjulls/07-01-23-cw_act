//object with logic (functions) - 1 варіант додавання прототипу
// const MyArrayPrototype = {};
// MyArrayPrototype.push = function (value) {
//   this[this.length] = value;
//   return ++this.length;
// };

// constructor for prototype - 2 варіант
function MyArrayPrototype() {
  this.push = function () {
    for (let index = 0; index < arguments.length; index++) {
      this[this.length++] = arguments[index];
    }
    return this.length;
  };

  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length - 1];
    // this.length--;
    return lastItem;
  };

  //створити новий екземпляр нашого масиву
  //запушити в нього елементи з поточного масиву у зворотньому порядку
  //повернути новий екземпляр нашого масиву
  this.reverse = function () {
    const newMyArray = new MyArray();
    for (let index = this.length - 1; index >= 0; index--) {
      newMyArray.push(this[index]);
    }
    for (let index = 0; index < this.length; index++) {
      this[index] = newMyArray[index];
    }
    return newMyArray;
  };

  this.forEach = function (func) {
    for (let index = 0; index < this.length; index++) {
      func(this[index], index, this);
    }
  };
  this.some = function (func) {
    for (let index = 0; index < this.length; index++) {
      if (func(this[index])) {
        return true;
      }
    }
    return false;
  };
  this.every = function (func) {
    for (let index = 0; index < this.length; index++) {
      if (func(this[index], index, this) === false) {
        return false;
      }
    }
    return true;
  };
}

//constructor with data
function MyArray() {
  this.length = 0;
  for (let index = 0; index < arguments.length; index++) {
    this.push(arguments[index]);
  }
}

// 1 варіант додавання прототипу
// MyArray.prototype = MyArrayPrototype;
// 2 варіант додавання прототипу
MyArray.prototype = new MyArrayPrototype();
MyArray.prototype.newMethod = function () {
  console.log("new method!!!");
};

const myArrayNumbers = new MyArray();
console.log(
  myArrayNumbers.every(function (elem) {
    return  elem > 5;
  })
);
// myArrayNumbers.push(777, 4, 5, 7, 8);
// const newMyArrayReverse = myArrayNumbers.reverse();
console.log(myArrayNumbers);
// myArrayNumbers.pop();
// myArrayNumbers.pop();
// console.log(myArrayNumbers);
myArrayNumbers.forEach(function (elem) {
  console.log(elem);
});

// const arrayNumbers = new Array(3, 5, 7);
// arrayNumbers.push(45);
// console.log(arrayNumbers);
// Array.prototype.newMethod = function () {
//   console.log("new method!!!");
// };
