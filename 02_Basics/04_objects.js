// Singleton

//const tinder ={} // Non sigleton
const tinder = new Object() // Signleton object
//console.log(tinder); // no diff gives simple empty object
tinder.id = "123abc"
tinder.name = "Abc"
tinder.isLoggedIn = false

//console.log(tinder)

const regularUser = 
{ 
      email: "cdb@gmail.com",
      fullName :
        {
            userFullName:
                {
                    firstName: "Ritesh",
                    middleName: "Indrapal",
                    lastName:"Gupta"
                }
        }
}
//console.log(regularUser.fullName.userFullName);

// =========== source object merging in target object

const obj1 = {1:"a", 2:"b"}

const obj2 = {3:"a", 4:"b"}

const obj3 = {5:"a", 6:"b"}
//const obj3 = {obj1,obj2} // not the right way to do it.

//const obj4 = Object.assign({},obj1,obj2,obj3) // right way merge object, source object to target object

const obj4 = {...obj1,...obj2,...obj3} // best way to merge objects with spread operator

//console.log(obj4);

const arrUser = [

    {
    id:1,
    email:"hr@gmail.com"
    },

    
    {
        id:1,
        email:"hr@gmail.com"
        },
        
    {
        id:1,
        email:"hr@gmail.com"
        },
        {
        id:1,
        email:"hr@gmail.com"
        },
        {
        id:1,
        email:"hr@gmail.com"
        }
]

arrUser[1].email
//console.log(tinder)

//console.log(Object.keys(tinder)); // to get Keys of Object
//console.log(Object.values(tinder));// to get values of an object
//console.log(Object.entries(tinder)) // gives array inside array of each and Key and its value
//console.log(tinder.hasOwnProperty("isLoggedIn"))// check for particular key is available or not and gives boolean result

//===================== De-structuring =======================================

const course = {

cousreName: "js learning",
price: 999,
courseInstructor:"Ritesh"
}

// normal way to access course value 

const {courseInstructor: instructor} = course

console.log(instructor)


// below are example of JSON, it similar to object but ojects always have names. and keys always written in ":"

{

    "cousreName": "js learning",
"price": 999,
"courseInstructor":"Ritesh"


}

[
    {},
    {},
    {}
] 