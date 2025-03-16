// array

const myArr = [0, 1, 2, 3, 4, 5];

// console.log(myArr);
// console.log(myArr[1]);

// shallow copy - properties share the same references
// deep copy - properties do not share the same references

const numbers = new Array(1, 2, 3, 4);
// console.log(numbers[0]);

// Array methods

// numbers.push(6);
// numbers.push(7);
// numbers.pop();

// numbers.unshift(88);
// numbers.shift();


// console.log(numbers.includes(2));
// console.log(numbers.indexOf(4));

const newArr =  numbers.join()

console.log(numbers);
console.log(newArr);
console.log(typeof newArr);


// slice - does not modified orignal array and does not include last index, splice - modified orignal array and  include last index

console.log('A', numbers);
const myArr1 = numbers.slice(1, 3);

console.log(myArr1);
console.log('B', numbers);

const myArr2 = numbers.splice(1, 3);
console.log(myArr2);
console.log('C', numbers);