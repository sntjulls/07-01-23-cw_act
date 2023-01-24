//constructor for prototype
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
      delete this[--this.length];
      return lastItem;
    };
    this.reverse = function () {
      //створити новий екземпляр нашого масиву
      const newMyArray = new MyArray();
      //запушити в нього елементи з поточного масиву у зворотньому порядку
      for (let index = this.length - 1; index >= 0; index--) {
        newMyArray.push(this[index]);
      }
      for (let index = 0; index < this.length; index++) {
        this[index] = newMyArray[index];
      }
      //повернути новий екземпляр нашого масиву
      return newMyArray;
    };
  }
  //constructor with data
  function MyArray() {
    this.length = 0;
    for (let index = 0; index < arguments.length; index++) {
      this.push(arguments[index]);
    }
  }
  
  MyArray.prototype = new MyArrayPrototype();
  // MyArray.prototype.newMethod = superMethod;
  
  const myArrayNumbers = new MyArray(8, 7, 6);
  // myArrayNumbers.push(777, 4, 5, 7, 8);
  const newMyArrayReverse = myArrayNumbers.reverse();
  console.log(myArrayNumbers);
  console.log(newMyArrayReverse);
  
  // const arrayNumbers = new Array(3, 5, 7);
  // arrayNumbers.push(45);
  // console.log(arrayNumbers);
  // Array.prototype.newMethod = superMethod;
  
  // function superMethod(){console.log('new method!!!')}