// Dates

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(1996, 6, 10);
// let myCreatedDate = new Date(1996, 6, 10, 5, 3);
// let myCreatedDate = new Date("2025-01-13");
let myCreatedDate = new Date("01-13-2025");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDay());


console.log(newDate.toLocaleDateString());
console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));

