
let a = 300
// {} // is called block, scope

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("inner " ,a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Hitesh"

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()

if(true){
    const username = "Hitesh";
    if(username === 'Hitesh'){
        const website = "Youtube";
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//  ++++++++++++++++++++ intresting +++++++++++++++

console.log(addone(5));



function addone(num){
    return num + 1;
}


// console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization because of hoisting

const addTwo = function(num){
    return num + 2;
}

addTwo(5);