let score = "33asgg";

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // NaN - Not a Number

// console.log(typeof NaN); // number

// "33" --> 33
// "33abc" --> NaN
// true --> 1; false --> 0
// Number(null) --> 0
// Number(undefined) --> NaN

let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

//  1 => true; 0 => false
// "" => false
// "Shiv" => true

let someNumber = 33;
let stringSomeNumber = String(someNumber);
// console.log(stringSomeNumber);
// console.log(typeof stringSomeNumber);


// *********************************** Operations ********************************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " Shiv";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 3);
// console.log(1 + "3");
// console.log("1" + 3 + 3);
// console.log(1 + 3 + "3");

// console.log(3 + 4 * 5 % 3);
// console.log( (3 + 4) * 5 % 3);

// console.log(+true); // + converts into number
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2+2; // not recommended

let gameCounter = 100;
gameCounter++;
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion