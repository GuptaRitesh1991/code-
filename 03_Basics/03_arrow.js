const user = {

username : "Ritesh",

Price : 999,

welcomeMessage: function() {

    //console.log(`${this.username},${" "}Welcome to Website`);
    
}

}

//user.welcomeMessage()

// function chai() {

//     console.log(this);
    
// }

// chai()


// const chai = function()
// {
// let userName = "Ritesh"
// console.log(this.userName);

// }

// chai()



const chai = () =>  // This is called arrow function
{
let userName = "Ritesh"
console.log(this);

}

// chai()

//Syntax of arrow function      () => {}

// const addTwo = (num1,num2) => 
// {

// return num1+num2

// }

// console.log(addTwo(4,6));

// Implicit arrow fucntion retrun syntax

const addTwo = (num1,num2) => (num1+num2); // no need of {} and return keyword since it is single line keyword
console.log(addTwo(4,6));