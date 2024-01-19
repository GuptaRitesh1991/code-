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
// Digital clock

const clock = document.getElementById("clock")
// or above and below both are right
// const clock = document.querySelector('#clock')
// console.log(clock)
setInterval(function() // very important method to handle timer, will help to display time after 1 milli or 2 milli
{
  let date =new Date()
  clock.innerHTML=date.toLocaleTimeString()

},1000)

```

## Project 3 Guess the Number

```JavaScript 


let randomNumber = (parseInt(Math.random()*100+1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let PrevGuess = []
let numGuess = 1
let playGame = true

if(playGame)
{
  submit.addEventListener('click', function(e)
  {
    e.preventDefault()
    const guess = parseInt (userInput.value)
   console.log(guess)
    validateGuess(guess)
  }
  )
}

function validateGuess(guess)
{
if(isNaN(guess))
{
  alert('Please enter valid Number')
}
else if (guess<1){'Please enter number which is bigger than 1'}

else if(guess>100)
{
  'Please enter number which is smaller than 100'
}
else 
{

  PrevGuess.push(guess)
  if (numGuess === 11)
  {
    displayGuess(guess)
    displayMessage(`Game over. Random Number was ${randomNumber}`)
    endGame()
  }
  else
  {
    displayGuess(guess)
    checkGuess(guess)
  }

}

}

function checkGuess(guess)
{
  if (guess === randomNumber)
  {
    displayMessage(`You guessed it right`)
    endGame()
  }
  else if (guess < randomNumber)
  {
    displayMessage(`Number is too low`)
  }

  else if (guess > randomNumber)
  {
    displayMessage(`Number is too high`)
  }

}

function displayGuess(guess)
{
  userInput.value = ""
  guessSlot.innerHTML += `${guess},`
  numGuess ++
  remaining.innerHTML = `${11 - numGuess}`

}

function displayMessage(message)
{
lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame()
{
  userInput.validateGuess = ""
  userInput.setAttribute("disabled", '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()

}

function newGame()
{
  const newGameButton = document.querySelector(`#newGame`)
  newGameButton.addEventListener('click',function(){

    randomNumber = (parseInt(Math.random()*100+1))
    PrevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}

```