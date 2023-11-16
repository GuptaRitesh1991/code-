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



//console.log(loginUserMessage());


function calculateCartPrice(val1,...num3) // this is called rest operator, which allows user to add multiple values in the form of array mostly used in Ecom for adding multiple values price 
{
    return num3    
}

//console.log(calculateCartPrice(200,300,400));

// How to handle objects in function

const user = {

username : "Ritesh",

Price : 199

}

function objectHandler(anyobject) 
{

//    console.log(`username is ${anyobject.username} and price is ${anyobject.Price} `);

}

objectHandler(user)

// How to pass arrays in function

const myNewArr = [200,300,500,600]  // define and declair array

function returnArrayValue(getArray) 
{
 return getArray[3]    // retruned 4 value of array
}

console.log(returnArrayValue(myNewArr)); // call fucntion with actual parameter of array and print with console log