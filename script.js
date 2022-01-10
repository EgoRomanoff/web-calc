// TODO: все операнды и оператор занести в массив и при вводе новой переменной сделать проверку

const output = document.querySelector('.output'),
      keyboard = document.querySelector('.controls'),
      numbers = Array.from(document.querySelectorAll('.btn--number')),
      pointButton = document.querySelector('#point'),
      signButton = document.querySelector('#sign'),
      operators = Array.from(document.querySelectorAll('.btn--operator')),
      backspaceButton = document.querySelector('#backspace'),
      clearButton = document.querySelector('#clear'),
      equallyButton = document.querySelector('#equally')

let currentOperand = '0',
    operand1 = undefined,
    operator = undefined,
    operand2 = undefined,
    currentResult = undefined,
    newOperandEntering = true

keyboard.addEventListener('click', e => {

  if (numbers.includes(e.target)) enterNumber(e.target)

  if (e.target === pointButton) enterPoint()

  if (e.target === signButton) toggleSign()

  if (operators.includes(e.target)) enterOperator(e.target)

  if (e.target === equallyButton) calculateResult()

  if (e.target === backspaceButton) deleteLastSymbol()

  if (e.target === clearButton) clearData()

})

function enterNumber(numButton) {

  if (newOperandEntering) {
    currentOperand = numButton.value
    newOperandEntering = false
  } else {
    currentOperand += numButton.value
  }

  outputValue(currentOperand)

}

function enterPoint() {

  if (currentOperand.includes('.')) {
    return 0
  } else {
    newOperandEntering = false
    currentOperand += pointButton.value
    outputValue(currentOperand)
  }

}

function toggleSign() {

  if (currentOperand === '0'){
    return 0
  } else if (currentOperand.slice(0, 1) !== '-') {
    currentOperand = '-' + currentOperand
  } else {
    currentOperand = currentOperand.slice(1)
  }

  outputValue(currentOperand)
}

function enterOperator(operButton) {

  if (operand1 === undefined) {
    currentResult = operand1 = parseFloat(currentOperand)
  } else if (operand2 === undefined) {
    operand2 = parseFloat(currentOperand)
    currentResult = makeCalculation(operand1, operator, operand2)
    operand1 = currentResult
    operand2 = undefined
    outputValue(currentResult)
  } else {
    operand2 = undefined
  }

  operator = operButton.value
  newOperandEntering = true

}

function calculateResult() {

  if (operator === undefined) {
    return 0
  } else if (operand2 === undefined) {
    operand2 = parseFloat(currentOperand)
    currentResult = makeCalculation(operand1, operator, operand2)
    operand1 = currentResult
    outputValue(currentResult)
  } else {
    currentResult = makeCalculation(operand1, operator, operand2)
    operand1 = currentResult
    outputValue(currentResult)
  }

  newOperandEntering = true

}

function deleteLastSymbol() {

  if (newOperandEntering) {
    return 0
  } else if (currentOperand.length === 1) {
    currentOperand = '0'
    newOperandEntering = true
  } else {
    currentOperand = currentOperand.slice(0, -1)
  }

  outputValue(currentOperand)

}

function outputValue(targetValue) {
  output.value = String(targetValue)
}

function clearData() {

  [currentOperand, operand1, operator, operand2, currentResult, newOperandEntering] = ['0', undefined, undefined, undefined, undefined, true]
  outputValue(currentOperand)

}

function makeCalculation(a, operator, b) {

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

function makeDivision(a, b) {

  return (b === 0 ? 'Error (x / 0)' : a / b)

}
