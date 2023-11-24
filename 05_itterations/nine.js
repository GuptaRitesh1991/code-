// reduce method in array

const myNums = [1,2,3]
const initialVal = 0
const myTotal = myNums.reduce( (acc,curVal) => acc + curVal, initialVal)
//console.log(myTotal);

const shoppingCart = [
{                       itemName : "JS course",
                        Price: 2000
},
{                       itemName : "C++",
                        Price: 3000
},
{                       itemName : "Python",
                        Price: 5000
},
{                       itemName : "Data scientist",
                        Price: 12000
},
]

const priceToPay = shoppingCart.reduce((acc,item)=>(acc+item.Price),0)
console.log(`Total Price for all the courses is :- ${priceToPay}`);