// Basic Calculator - 
// an example to how we can link functions to HTML elements and get user input values

// sumUp will take 2 values and add them together
function sumAdd(valueOne, valueTwo) {
  // convert strings to numbers and add together  
  return Number(valueOne) + Number(valueTwo) // convert string value to a number value
}

function sumSub(valueOne, valueTwo) {
  return Number(valueOne) - Number(valueTwo)
}

function sumMulti(valueOne, valueTwo) {
  return Number(valueOne) * Number(valueTwo)
}

function sumDiv(valueOne, valueTwo) {
  return Number(valueOne) / Number(valueTwo)
}

// define some basic variables we need for the calculate function
// const operator = ?  operation
const numberOne = document.getElementById('numberone') //INPUT 1
const numberTwo = document.getElementById('numbertwo') //INPUT 2
const result = document.getElementById('result') //Output


// // Calculate - the function that brings it all together
// function calculate() {
//   // sum calls the sumUP function and valueOne and valueTwo are provided inside brackets
//   let sum = sumUp(numberOne.value, numberTwo.value) //
//   // numberOne.value = will get the input from the user for that box (2, 67, 890)
//   result.value = sum.toString()
//   // result is converted to a string and applied to the value property of our result input
// }

function calculate(calculation) {
  let sum

  switch (calculation) {
    case 'add':
      sum = sumAdd(numberOne.value, numberTwo.value)
      break
    case 'subtract':
      sum = sumSub(numberOne.value, numberTwo.value)
      break
    case 'multiply':
      sum = sumMulti(numberOne.value, numberTwo.value)
      break
    case 'divide':
      sum = sumDiv(numberOne.value, numberTwo.value)
      break
    default:
      console.log("No values")
      return
  }
  result.value = sum.toString()
}