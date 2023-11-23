// most used loop for array -- For Each loop

const coding= ["JS","Ruby","JAVA","Python","CPP"]

// coding.forEach( function (item) {

//     console.log(item);
    
// })

// using array function
//coding.forEach((item)=>{console.log(item);})


// now separate declare function and give its ref in for Each loop
// function printMe(item) {

//     console.log(item);
// }

// coding.forEach(printMe) // not called function, just given function reference 

//==================================================================
// new scenario will print items, index no# and entire array

// coding.forEach((item,index,coding)=> {
//     console.log(item,index,coding);
// })

//================================= Now see array with multiple objects example
const myCoding = [
{
    languageName :"Java Script",
    languageFile : "JS"
},
{
    languageName :"C++",
    languageFile : "CPP"
},
{
    languageName :"Ruby",
    languageFile : "RB"
}
]

myCoding.forEach((item)=>{

    console.log(item.languageName);
})

