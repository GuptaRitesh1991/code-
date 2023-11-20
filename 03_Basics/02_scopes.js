let a = 10
const b = 20
var c = 30
console.log(a);
console.log(b);
console.log(c);

// {}  - is called scope of the program when wrritten with fucntion, if else, while do while

if (true)
{
    let a = 10
const b = 20
var c = 30
}

// +++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++
addOne(5)  // if console log, this will print value b4 initilation
function addOne(num) {

    return num +1
    
}





addTwo(5) // if console log, then will give error because excustion not allowed before initilization
const addTwo = function(num) {

    return num +1
    
}


