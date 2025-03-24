function sayMyName() {
    console.log('S');
    console.log('h');
    console.log('i');
    console.log('v');
}

// sayMyName()

function addTwoNumbers(num1 = 0, num2 = 0){
    console.log(num1 + num2); // functions by default return undefined
    return; // functions by default return undefined even if you write return keyword only
}

// function addTwoNumbers(num1 = 0, num2 = 0){
//    let result = num1 + num2;
//    return result;
//    console.log(result); // unreachable code never execute
// }

// function addTwoNumbers(num1, num2){
//     return num1 + num2;
// }

// addTwoNumbers(4, 5);
// const result = addTwoNumbers(4, '5');
// console.log(result);
// addTwoNumbers(4);

function loginUserMessage(username){
    if(username === undefined){
        console.log(`please enter username`);
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('Shiv'));
// console.log(loginUserMessage(''));
// console.log(loginUserMessage()); // when you did not pass anything it will undefined


function calculateCartPrice(val1, val2, ...num1){
    // ...num1 will bundel all parameter in an array
    return num1;
}

// console.log(calculateCartPrice(200, 300, 500, 800));

const user = {
    username : 'hitesh',
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
// handleObject({
//     username: 'Shiv',
//     price: 399
// });

const myNewArray = [200, 300, 400];

function returnSecondValue(arr){
    return arr[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1, 2, 3, 4]));
