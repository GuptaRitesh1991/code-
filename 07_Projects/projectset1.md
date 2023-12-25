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
