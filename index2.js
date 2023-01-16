function sum() {
  let summa = 0;
  for (let index = 0; index < arguments.length; index++) {
    summa += arguments[index];
  }
  return summa;
}

console.log(sum(1, 2, 3, 7));
