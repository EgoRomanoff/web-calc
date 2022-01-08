const output = document.querySelector('.output')
const numbers = Array.from(document.querySelectorAll('.btn--number'))
const operators = Array.from(document.querySelectorAll('.btn--operator'))
const percentButton = document.querySelector('#percent')
const clearButton = document.querySelector('#clear')
const equallyButton = document.querySelector('#equally')

let operand1 = undefined
let operator = ''
let operand2 = undefined
let value = undefined
let newOperandEntering = true

window.addEventListener('click', function(e) {

  if (numbers.includes(e.target)) {

    if (newOperandEntering) {
      output.value = e.target.value
      newOperandEntering = false
    } else {
      output.value += e.target.value
    }

  }

  if (operators.includes(e.target)) {

    if (operand1 === undefined || operand2 !== undefined) {
      operand1 = parseFloat(output.value)
    } else {
      value = operand1 = output.value = makeCalculation(operand1, operator, parseFloat(output.value))
    }

    operator = e.target.value
    newOperandEntering = true
  }

  if (e.target === equallyButton) {
    operand2 = parseFloat(output.value)
    value = makeCalculation(operand1, operator, operand2)
    output.value = value

    newOperandEntering = true
  }

  if (e.target === clearButton) {
    [operand1, operator, operand2] = [undefined, '', undefined]
    output.value = '0'
  }

  console.log(`a = ${operand1}, b= ${operand2}, operator = ${operator}, value = ${value}`);
})

console.log(`a = ${operand1}, b= ${operand2}, operator = ${operator}, value = ${value}`);

function outputValue (targetValue) {
  output.value = targetValue
}

function makeCalculation (a, operator, b) {

  switch (operator) {
    case 'add' :
      return (a + b)
      break
    case 'sub' :
      return (a - b)
      break
    case 'multiply' :
      return (a * b)
      break
    case 'div' :
      return makeDivision(a, b)
      break
  }

}

function makeDivision (a, b) {

  return (b === 0 ? 'Error (x / 0)' : a / b)

}
