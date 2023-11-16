// function syntax below 

// function name(params) {}

// example 

/*
function addTwoNumbers(num1, num2) {

    num1+ num2

    console.log(num1+num2);
    
}
*/

function addTwoNumbers(num1, num2) {

//let result =    num1+ num2 // diff ways to write and retrun

    return num1+num2   // diff ways to write and retrun, here we save some space
    
}

const result = addTwoNumbers(6,8)

//console.log("Result", result);

/*function loginUserMessage(username) 
{
  return`${username} just logged in. `    
}

// loginUserMessage("Ritesh") // This retrun value but we have not given instruction to print so used below correct way.

console.log(loginUserMessage("Ritesh"));

*/

// what if you don't pass argument in calling function. you'll get undefined value so to overcome this you can use IF statement or as below

function loginUserMessage(username = "Sam") 
{
if (username === undefined) // or (!username) both have same meaning
{

    console.log("Please Enter a username");    
    return
}

  return`${username} just logged in. `    
}



console.log(loginUserMessage());

