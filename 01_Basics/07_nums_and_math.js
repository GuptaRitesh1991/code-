const score = 1000

const balance = new Number(100)

//console.table([score,balance]);
//console.log(score);
//console.log(balance);

//console.log(balance.toString().length); // gives length of number converted to string
//console.log(balance.toFixed(1)); // right the numbers in decimal

const anotherNumber = 123.7857;
//console.log(anotherNumber.toPrecision(3)); // print round off value of a number

const hundreds = 100000
//console.log(hundreds);

//console.log(hundreds.toLocaleString("en-IN")); // makes number readable in comma separated format.

//++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++
//console.log(Math);
//console.log(Math.abs(-4));
//console.log(Math.round(4.6));
//console.log(Math.ceil(4.6)); // convert to round off to 5
//console.log(Math.floor(4.6));// convert round off to 4
//console.log(Math.min(4.6,7,6,9));// select min value from given list

//console.log(Math.random()); // Gives random number but between 0.1-0.9 with long decimal
//console.log(Math.random()*10); // will increase the number from 0.11 to 1.1
//console.log(Math.floor(Math.random()*10)+1);// to avoid situation 0.01 *10 we add 1

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)+min)); // Very imp formula to get random number 