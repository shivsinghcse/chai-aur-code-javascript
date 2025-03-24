// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = '123abc';
tinderUser.name = 'Ajeet';
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : 'some@gmail.com',
    fullname: {
        userfullname: {
            firstname: "shiv",
            lastname: "Singh",
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname); // ?. optional chaining

const obj1 = {
    1: 'a',
    2: 'b'
}
const obj2 = {
    3: 'a',
    4: 'b'
}

// const obj3 = {obj1, obj2};

// const obj3 = Object.assign({}, obj1, obj2); // {} is an optional parameter {} - target

const obj3 = {...obj1, ...obj2}
// console.log(obj3);



const users = [
    {
        id: 1,
        email: 'user1@gmail.com'
    },
    {
        id: 2,
        email: 'user1@gmail.com'
    },
    {
        id: 3,
        email: 'user1@gmail.com'
    },
    {
        id: 4,
        email: 'user1@gmail.com'
    },
    {
        id: 5,
        email: 'user1@gmail.com'
    },
]

// console.log(users[0].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // return an array
// console.log(Object.values(tinderUser)); // return an array

// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));



