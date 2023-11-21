// For loop

//      for (let i = 0; i < array.length; index++) {
//          const element = array[index];
    
//      }

// for (let i = 0; i < 10; i++) {
//     const element = i
//     console.log(element);

// }

// const myArr = ["Ram","RAja","Ramesh"]

// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
// }



// Keywords, break and continue

// for (let index = 1; index <= 20; index++) {
//     //const element = array[index];
//     if (index==5) {
//         console.log("5 detected");
//         break   // means break the loop
        
//     }
//     console.log(`value of I is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    //const element = array[index];
    if (index==5) {
        console.log("5 detected");
        continue // forgive one time, will skip one condition and rest loop will continue
        
    }
    console.log(`value of I is ${index}`);
}