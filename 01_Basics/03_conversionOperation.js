/*

let score = 33
console.log(typeof score); // will give number

//Now suppose scores type is number but in string, converted to number will give number 
let scores = "33"
let valueInNumber = Number(scores)
console.log(typeof valueInNumber);

//Now suppose A is string with number and characters, so if converted to number, it will not be number but NaN 

let A = "33abc"
let valueInNumber1 = Number(A)
console.log(typeof valueInNumber1);
console.log (valueInNumber1 +" is the actual value of converted variable and is not number");

*/
//Now suppose A is null & if converted to number, it will become 0 which is wrong 
// And if Undefined is converted it gives - NaN (not a number)
// true converted to 1 and false converted 0
/*
let A = undefined
let valueInNumber1 = Number(A)
console.log(typeof valueInNumber1);
console.log (valueInNumber1 );
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // 1 turn to true 0 converted False, "" gives false and "Hitesh" gives true