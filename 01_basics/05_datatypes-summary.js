// datatypes are mainly devided into 2 parts
    // Primitive : call by value - 7 types
        // Number
        // String
        // Boolean
        // undefined
        // null
        // BigInt
        // Symbol
 

const score = 100;
const scoreValue = 100.3;


const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId);

const bigNumber = 85438574857834957438574385n;


   // Non-Primitive / Reference : call by reference 
        // Array 
        // Object
        // Functions


const heros = ["shaktiman", "doga", "naagraj"];
let myObj = {
    name: "Shiv Singh",
    age: 23,
}
const myFunction  = function(){
    console.log("Hello World!");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp); // object
console.log(typeof myFunction); // function - we called function object

// Javascript is a dynamically typed language.