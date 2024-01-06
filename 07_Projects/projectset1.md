# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code
## Project 1
```JavaScript
console.log("Ritesh")

const buttons = document.querySelectorAll(".button")
//console.log(buttons)
const body = document.querySelector("body")
buttons.forEach(function(button){
  console.log(button)
  button.addEventListener("click",function(e){
    console.log(e)
    console.log(e.target)
     if(e.target.id === "grey"){
       body.style.backgroundColor = "grey" // or e.target.id;
     }

     if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id;
    }

    if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id;
    }

    if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id;
    }

    // or can use switch case too

//         switch (e.target.id) {
//       case "grey":
//           body.style.backgroundColor = "grey"
//           break;

//           case "yellow":
//           body.style.backgroundColor = "yellow"
//           break;

//           case "blue":
//           body.style.backgroundColor = "blue"
//           break;

//           // case "white":
//           // body.style.backgroundColor = "white"
//           // break;
  
//       default:
//           body.style.backgroundColor = "purple"

//           break;
//   }
  })
})



```
## Project 2 BMI calculator, assigmnent to add message comparing BMI

```JavaScript

const form = document.querySelector('form')

addEventListener('submit',function(e)
{
  e.defaultPrevented();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

if (height === '', isNaN(height), height< 0)
{
  results.innerHTML =  `Please enter valid height ${height}`
}

else if (weight === '', isNaN(weight), weight< 0)
{
  results.innerHTML =  `Please enter valid weight ${weight}`
}
else
{
  const bmi = (weight/((height*height)/10000)).toFixed(2) 
  results.innerHTML =  `<span> ${bmi}</span>`
}

}
)

```

## Project 3 

```JavaScript



```