// for of 

// ["", "", ""]
// [{}, {}, {}]
// const arr = [1, 2, 3, 4, 5];

// for (let num of arr){
//     console.log(num);
// }

// const greeting = "Hello World!";

// for ( const greet of greeting){
//     console.log(`Each char is ${greet}`);  
// }

// Maps - MDN docs, store unique values in key value pairs

const map = new Map();
map.set('IN', "India");
map.set('USA', "United State of America");
map.set('Fr', "France");
map.set('IN', "India"); // do not allow duplicate values
// console.log(map); // Map(3) {
//     'IN' => 'India',
//     'USA' => 'United State of America',
//     'Fr' => 'France'
//   }


// for (const [key, value] of map){
//     console.log(key, ':-', value);
// }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const key of myObject){
        console.log(key); // object is not iteratable here with for of loop
    }
