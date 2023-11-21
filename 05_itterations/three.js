// for of loop

["","",""]
[{},{},{}]

const arr = [1,2,3,4,5]

// for (const iterator of object) {
    
// }

// for (const num of arr) {

//     console.log(`print num ${num}`);
    
// }
// const greetings = "Hello World"
// for (const Greet of greetings) {

//     console.log(`print each char ${Greet}`);
    
// }

// Maps  has uniqe value, and always in original order 

const map = new Map()
map.set("IN","India")
map.set("US","United States")
map.set("FR","France")

//console.log(map);

// for (const key of map) {
//     console.log(key);    //this will give array type result [IN, India] which ideally we don't want
// }

for (const [key, value] of map) {   // using [key, value] is right way to itterate from map objects this will hold separate value destructure of array
//  console.log(`${key} :- ${value}`);   
}


// Objects are not itterable through forof loop example below 
const myObject = {
    game1 : "NFS",
    game2 : "SP"
}

for (const [key,value] of myObject) {

    console.log(`${key} :- ${value}`);
    
}