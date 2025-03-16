const name = 'Shiv Singh';
const repoCount = 50;

// console.log(name + " " + repoCount);

console.log(`Hello my name is ${name} and my total repo count is ${repoCount}.`);

const gameName = new String('taken-3');
// String{'taken-3'}

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // it does not change orignal string because it stores in stack
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('A')); // case-sensitive, and if character is not found it returns -1

const newString = gameName.substring(0, 4); // last index not included
console.log(newString);

const anotherString = gameName.slice(-6, 4); // it also accept negative number
console.log(anotherString);

const newStringOne = "       shiv singh      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https://shivsingh.com/hitesh%20choudhary';
console.log(url.replace('%20', '-'));



console.log(url.includes('siv')); // true/false

console.log(gameName.split('-')); // returns an array

// do console.log() and MDN