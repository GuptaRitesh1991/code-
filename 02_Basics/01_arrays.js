//Array

const myArr = [0,1,2,3,4,5] // one way of creating array
//console.log(myArr);
//const Arr2 = new Array(1,2,3,4) // another way of creating array
//console.log(Arr2[2]);


// Array method 
const Arr3= new Array(1,2,3,4)
//console.log(Arr3);
//console.log(Arr3.push(6));

//Arr3.push(6) // add value in array
//Arr3.push(6)
//Arr3.pop() // removes last value from the array
//Arr3.pop()
//Arr3.pop()

//Arr3.unshift(5)// to add value in the begining of the array
//Arr3.shift() // removes first element of array
//console.log(Arr3);

const newArr = Arr3.join('r') //add srting to array each element separated by comma
//console.log(Arr3);
//console.log(newArr);

// Slice and Splice

const myArrr = [0,1,2,3,4,5]
console.log("A " ,myArrr);

console.log(myArrr.slice(1,4))

console.log ("B", myArrr)

console.log (myArrr.splice(1,3))// delete the elements from the array and or replace it. and gives deleted element when print
console.log(myArrr);