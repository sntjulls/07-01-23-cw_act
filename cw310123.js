"use strict";

const arr = [1, 2, 5, 8, 9, 5, 4, 56, 5, 8, 5, 52, 4, 6, 96, 59, 75];
const arrSorted = arr.sort((a,b)=>a-b)
console.log(arrSorted);
//логаріфмічна  O(log(n))
const binarySearch = (array, key) => {
  let start = 0;
  let end = array.length-1;
  let middle;
  while(start<=end){
    middle = Math.round((start+end)/2);
    if(array[middle] === key){
      return middle;
    }
    if(array[middle] > key){
      end = middle-1;
    }else{
      start = middle+1;
    }
  }
  return -1;
}
console.log(binarySearch(arrSorted, 15));

//константна  O(1)
//console.log(arr[4]);

//лінійна O(n)+O(n)= 2*O(n)= O(n)
const linearSearch = (array, key) => {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === key) {
      return index;
    }
  }
  return -1;
};
//console.log(linearSearch(arr, 5));

//квадратична O(n^2)
const createTable = (limit = 4) => {
  const table = [];
  for (let i = 1; i <= limit; i++) {
    for (let j = 1; j <= limit; j++) {
      table.push(`${i} * ${j} = ${i * j}`);
    }
  }
  return table;
};
//console.log(createTable(5));