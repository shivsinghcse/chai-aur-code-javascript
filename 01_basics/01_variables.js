const accountId = 12435;
let accountEmail = 'singhshiv@gmail.com';
var accountPassword = "12345678";
accountCity = "Lucknow";
let accountState;

// accountId = 2; // not allowed

accountEmail = 'singhshiv0102@gmail.com';
accountPassword = '87654321';
accountCity = "Gurgoan";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

{} // scope - initially js does not work on scope

/*
    Prefer not to use var
    because of issue in block scope and function scope
*/