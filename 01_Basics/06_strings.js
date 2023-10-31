const name = "Ritesh"
const repoCount = 50

//console.log(name + repoCount + "value");// outdated method for console printing , use srting interpolation

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Ritesh-HC");
//console.log(gameName[0]);
//console.log(gameName.__Proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(3));
//console.log(gameName.indexOf('t'));
const newString = gameName.substring(0,4)// will print string key starting from 0-3
console.log(newString);
const anotherString = gameName.slice(-8,4)// will print string key starting from 0-3
console.log(anotherString);

const oneString = "   Ritesh ;"
console.log(oneString);
console.log(oneString.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20","-"));

console.log(url.includes("hitesh"));// check for exact match of value

console.log(gameName.split("-"));