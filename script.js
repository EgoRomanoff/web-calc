const output = document.querySelector('.output')
const numbers = Array.from(document.querySelectorAll('.btn--number'))
const operators = Array.from(document.querySelectorAll('.btn--operator'))
const percentButton = document.querySelector('#percent')
const clearButton = document.querySelector('#clear')
const equallyButton = document.querySelector('#equally')

let operand1 = 0
let operator = ''
let operand2 = 0
let newOperandEntering = true

window.addEventListener('click', function(e) {

  if (numbers.includes(e.target)) {

    if ((output.value === '0' && e.target.value !== '.') || newOperandEntering) {
      output.value = e.target.value
      newOperandEntering = false
    } else {
      output.value += e.target.value
    }

  }

  if (operators.includes(e.target)) {
    operand1 = parseFloat(output.value)
    operator = e.target.value
    newOperandEntering = true
  }

  // if (e.target === percentButton) {

  // }

  if (e.target === equallyButton) {
    operand2 = parseFloat(output.value)
    output.value = makeCalculation(operand1, operator, operand2)
    operand1 = parseFloat(output.value)
    newOperandEntering = true
  }

  if (e.target === clearButton) {
    [operand1, operator, operand2] = [0, '', 0]
    output.value = '0'
  }

})

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
