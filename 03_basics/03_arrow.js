const user = {
    username: "hitesh",
    price: 399,
    welcomemessage: function(){
        console.log(`${this.username},  welcome to website`); // this refers to current context
        console.log(this); // print current object
        
    }
}


// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this); // {} current context is empty - inside node environment this refers to an empty object but inside browser this refers to window object


// function chai(){
//     let username = "Shiv";
//     console.log(this);  // lots of property and methods
//     console.log(this.username); // undefined - here in functions we are not able to use this
// }

//  const chai = function(){
    // let username = "Shiv";
    // console.log(this);  // lots of property and methods
    // console.log(this.username); // undefined - here in functions we are not able to use this
// }
// chai();

const coffee = () => {
    let username = "Shiv";
    console.log(this); // {} - inside arraow function
    console.log(this.username); // undefined - here in functions we are not able to use this
}

// coffee()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// const addTwo = (num1, num2) =>  num1 + num2; // implicit return

// const addTwo = (num1, num2) =>  (num1 + num2); // implicit return , if you use {} you have to write return keyword but if you are using () there is no need to use return keyword

const addTwo = (num1, num2) =>  ({username: 'Shiv'}); // returning object


console.log(addTwo(3, 4));
