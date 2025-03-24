// singleton - from constructor
// Object.create

// object literals

const mySym = Symbol("Key1");

const user = {
    name: "hitesh",
    "full name": "Hitesh Choudary",
    [mySym] : "mykey1", // to use symbol
    age: 18,
    location: 'Jaipur',
    email: "xyz@gmail.com",
    isLoggedIn: false,
    lastLogin : ["monday", "friday"],
};

// console.log(user.name);
// console.log(user["name"]); // treat key as string 
// console.log(user["full name"]);
// console.log(user[mySym]); // string
// console.log(typeof user[mySym]); // string
// console.log(Object.keys(user));

// user.email = "singhshiv@gmail.com"
// console.log(user);
// Object.freeze(user);
// user.email = "singhshiv@mail.com"; 
// console.log(user);

user.greeting = function(){
    console.log('Hello user!!');
}
user.greetingTwo = function(){
    console.log(`Hello , ${this["full name"]}!!`);
}

console.log(user.greeting); // [Function (anonymous)]
console.log(user.greeting()); // Hello user!!
console.log(user.greetingTwo()); // Hello Hitesh Choudhary!!


