class Stack {
  constructor(maxSize, ...args) {
    this.maxSize = maxSize; //setter, getter
    this._size = 0;
    for (const value of args) {
      this.push(value);
    }
  }
  //   push(value, checkFunck = () => true) {
  //     if (checkFunck(value)) {
  //       this[`_${this._size}`] = value;
  //       return ++this._size;
  //     }
  //   }
  get maxSize() {
    return this._maxSize;
  }
  set maxSize(value) {
    if (typeof value !== "number") {
      throw new TypeError("must be number");
    }
    if (value <= 0 || value > MAX_SIZE_STACK) {
      throw new RangeError("must be less " + MAX_SIZE_STACK);
    }
    this._maxSize = value;
  }
  get size() {
    return this._size;
  }
  get isEmpty() {
    return this._size === 0;
  } //щоб не при виклику stack не було мінусового числа
  push(value) {
    if (this._size >= this.maxSize) {
      throw new RangeError("stack overflow");
    }
    this[`_${this._size}`] = value;
    return ++this._size;
  }
  pop() {
    if (this.isEmpty) {
      return;
    }
    const lastItem = this[`_${this._size - 1}`];
    delete this[`_${this._size - 1}`];
    this._size--;
    return lastItem;
  }
  pick() {
    return this[`_${this._size - 1}`];
  }
}

const stack = new Stack(5, 1, 27);
console.log(stack);
stack.push(7);
stack.push(7);
stack.push(7);
stack.push(7);

// написати функцію, яка робить перевірку правильності розташування дужок

// checkExpression('(())') -> true
// checkExpression('()()()()') -> true
// checkExpression('(()))') -> false
// checkExpression(')(())(') -> false

const options = {
  breckets: {
    "(": ")",
    "[": "]",
    "{": "}",
  },
};
/**
 *
 * @param {string} string
 * @param {object} options
 * @param {object} options.breckets
 * @returns
 */
const checkExpression = (string, options) => {
  const stack = new Stack(string.length);
  for (const symbol of string) {
    if (options.breckets[symbol]) {
      stack.push(symbol);
    }
    if (stack.isEmpty) {
      return false;
    }
    const lastSymbolInStack = stack.pick(); //'['
    const correctSymbol = options.breckets[lastSymbolInStack]; //']'
    if (symbol === correctSymbol) {
      stack.pop();
    } else {
      return false;
    }
  }
  console.log(stack);
  return stack.isEmpty;
};
console.log(checkExpression("([(]))", options))
