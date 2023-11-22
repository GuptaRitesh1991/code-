// To retrive object element using for in 

const myObject = {

    Js : "Java Script",

    CPP: "C++",
    rB:"Ruby"
}

// for (const key in myObject) {
    
//     console.log(key);
        
//     }

for (const key in myObject) {
    
    console.log(`${key} is the shortcut key of ${myObject[key]}`);
        
    }


    // can you retrive n print element using from array using For In loop

    const myArr = [1,2,3,4,5]

    for (const key in myArr) {
        
        console.log (myArr[key]);
            
        }