
let a = 300
// {} // is called block, scope

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("inner " ,a);
}

console.log(a);
// console.log(b);
console.log(c);
