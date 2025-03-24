// Immediately Invoked Function Expression (IIFE)
// polution???
(function chai(){
    // named IIFE
    console.log('DB CONNECTED!!');
})();

( (name) => {
    console.log("DB CONNECTED TWO", name);
})('Shiv')