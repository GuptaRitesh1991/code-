// #Premetive
// 7 types: string, number, null, boolean, undefined, symbol, bigInt


const isLoggedIn = false
const outSideTemp = null
let userEmail
const id = Symbol('123')
const anotherId = Symbol ("123")

//console.log(id === anotherId)
//console.log(typeof anotherId);


// ========= Non-Premetive or reference type ==============
// array, objects, functions

const heros = ["shakti","Pandey","fatichar"]

// anything under {} are objects, when you check typeof u will get object, 
// when you check function typeof you will get object function 


// +++++++++++++++++++++++++++++++++++++++++ Memory =======================
// Stack(all premetive type)creates a copy and Heap (non premetive) gives a reference

let myYoutubeName = "Ritzygupta"
let anotherName = myYoutubeName
anotherName = "Chaiwala"

//console.log(myYoutubeName);
//console.log(anotherName);

let user1 = {

    email:"user@google.com" ,
    upiId: '89898@sbi'
}

let user2 = user1

user2.email = "hitesh@google.com"
console.log(user1.email);
console.log(user2.email);