// if

// const isUserLoggedIn = true

// if (isUserLoggedIn) {


    
// }

// // compare operator < less than, > greater than, <= less than equal, 
// // >= greater than equal, == check equal to, != not equal to, === checks datatype and equal(strict equal)
// // !== datatype strick check not equal to

// const score=300

// if (score>100){

// const power = "fly"
// console.log(`user power: ${power}`);

// }

// // console.log(`user power: ${power}`);  // this statement will give scope error as var not used while defining variable & i.e., correct


// const balance = 1000

// if (balance < 500)
// {
//     console.log(`Less than 500`);

// }
// else if (balance < 750)
// {
//     console.log(`Less than 750`);

// }

// else if (balance < 900)
// {
//     console.log(`Less than 900`);

// }

// else 
// {
//     console.log(`Less than 1200`);

// }


// shopping on ecommerce example website account, checking multiple conditon in if statement for true

const userLoggedIn = true
const debitcard = true
const loggedInFromGoggle = true
const loggedInFromEmail = true

if (userLoggedIn && debitcard)

{console.log(`allowed to buy items`);}

if (loggedInFromEmail||loggedInFromGoggle)

{console.log(`user logged in`);}