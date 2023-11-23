//const coding= ["JS","Ruby","JAVA","Python","CPP"]

// const values = coding.forEach( (item)=>   // can you store foreach item in variables ?? Yes
// {
//     console.log(item); // This will print values of array
// }
// )

// console.log(values) // This will give undefined because in foreach loop arrow function does not retrun any value


// ======================= Basics of Filter, this is used to retrun values unlike ForEach loop===========
// const myNum = [1,2,3,4,5,6,7,8,9,10]

// const myNewNum = myNum.filter( (num)=> num> 4)

// console.log(myNewNum);


const myNum = [1,2,3,4,5,6,7,8,9,10]
// Another way to do it is explicit way below 
const myNewNum = myNum.filter( (num)=> {

    return num >5

})

//console.log(myNewNum);


// now can we get the same result from for each loop ?? see below 
const newArr =[] // here first we need to create empty array
// myNum.forEach( (num)=>{

//     if (num >5)
//     {
//         newArr.push(num); // post checking condition, push method will append all higher no# in empty array
//     }
// })

// console.log(newArr);


const books =[
    {tittle:"book one", genere : "Fiction", published: "1997", Edition: 2004},
    {tittle:"book two", genere : "Non-Fiction", published: "1999", Edition: 2001},
    {tittle:"book three", genere : "Sci-Fi", published: "2000", Edition: 2002},
    {tittle:"book four", genere : "Drama", published: "2004", Edition: 2007},
    {tittle:"book five", genere : "Rom-Com", published: "2006", Edition: 2010},
    {tittle:"book six", genere : "Drama", published: "1997", Edition: 2004},
    {tittle:"book seven", genere : "Fiction", published: "1997", Edition: 2002},
    {tittle:"book eight", genere : "Non-Fiction", published: "1997", Edition: 2000},
    {tittle:"book nine", genere : "Drama", published: "1997", Edition: 2008},
    {tittle:"book ten", genere : "History", published: "1997", Edition: 2006}
]

// ---- now supose user is applying some filter so those book and print them

const userBooks = books.filter( (bk)=> bk.genere === "Drama")

console.log(userBooks);