const score = 400;
// console.log(score);


const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const otherNumber = 23.8967;

// console.log(otherNumber.toPrecision(3)); // returns string


const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++ Maths +++++++++++++++

// console.log(Math); // returns an object

// console.log(Math.abs(-34)); // 34

// console.log(Math.round(3.4));

// console.log(Math.ceil(3.4));
// console.log(Math.floor(3.4));
// console.log(Math.min(3,4, 1, 5, 6));
// console.log(Math.max(3,4, 1, 5, 6));


// console.log(Math.floor(Math.random() * 6) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

