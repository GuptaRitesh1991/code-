const marvel_Heros = ["Thor","Ironman","Spiderman"]

const dc_Heros = ["Batman","Flash","Superman"]

marvel_Heros.push(dc_Heros) // does not merge correctly, gives array in array 

const allHeros = marvel_Heros.concat(dc_Heros)// concat gives new array for multiple arrays but not proper 

//console.log(allHeros);

// spread operator

const allHeross = [...marvel_Heros, ...dc_Heros]
//console.log(allHeross)


//console.log(Array.isArray("Ritesh"));// checks if an array and gives boolean value
//console.log(Array.from("Ritesh"));// convert string or any values into array

const another_Arr = [1,2,3,[4,5,6],[7,[8,9]],10,11]
console.log(another_Arr.flat(Infinity)); // use to get simple flat single array out of nested arrays

// Array.of create array from different elements
// 