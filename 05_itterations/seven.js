
// using map function
const myNumbers  = [1,2,3,4,5,6,7,8,9,10]

//const myNum = myNumbers.map( (num)=> num+10) 

//// ========= chaining technique 

const myNum = myNumbers
                .map( (num)=>num*10)
                .map( (num)=>num+10)
                .filter( (num)=>num > 50)
                
console.log(myNum);