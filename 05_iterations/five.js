const coding = ["js", "rb", "py", "java"];

// coding.forEach( function (item) {
//     console.log(item+"🚀");
// })
// coding.forEach((item) => {
//     console.log(item+"🚀");
// })

// callback function do not have name, here cb function will execute for each element and it did not return anything, it has 3 parameter item, index, array, forEach is a higher order loop

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languagename : 'javascript',
        languageFileName : 'js'
    },
    {
        languagename : 'java',
        languageFileName : 'java'
    },
    {
        languagename : 'python',
        languageFileName : 'py'
    },
]

myCoding.forEach((item) => {
    console.log(item.languagename, item.languageFileName);
})