const outputTop = document.querySelector('#output1'),
      outputBottom = document.querySelector('#output2'),
      keyboard = document.querySelector('.keyboard'),
      numbers = Array.from(document.querySelectorAll('.btn--number')),
      pointButton = document.querySelector('#point'),
      signButton = document.querySelector('#sign'),
      operators = Array.from(document.querySelectorAll('.btn--operator')),
      backspaceButton = document.querySelector('#backspace'),
      clearButton = document.querySelector('#clear'),
      equallyButton = document.querySelector('#equally')

// const curCalculation = {
//   curOperand: '0',
//   operand1: undefined,
//   operator: undefined,
//   operand2: undefined,
//   curResult: undefined
// }

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

  if (operators.includes(e.target)) {

    if (e.target.hasAttribute('data-unary')) {
      calculateUnary(e.target.value)
    } else {
      enterOperator(e.target)
    }
  }

  if (e.target === equallyButton) calculateResult()

  if (e.target === backspaceButton) deleteLastSymbol()

  if (e.target === clearButton) clearData()

  console.log(currentOperand, operand1, operator, operand2, currentResult, newOperandEntering);
})

function enterNumber(numButton) {

  if (newOperandEntering) {
    currentOperand = numButton.value
    newOperandEntering = false
  } else {
    currentOperand += numButton.value
  }

  outputValue(currentOperand)
  outputExpression(numButton.value)
}

function enterPoint() {

  if (currentOperand.includes('.')) {
    return 0
  }

  newOperandEntering = false
  currentOperand += pointButton.value
  outputValue(currentOperand)
  outputExpression(pointButton.value)

}

function toggleSign() {

  if (operand2 !== undefined) {
    operand1 = undefined
    operand2 = undefined
  }

  if (currentOperand === '0'){
    return 0
  } else if (currentOperand.slice(0, 1) !== '-') {
    currentOperand = '-' + currentOperand
  } else {
    currentOperand = currentOperand.slice(1)
  }

  outputValue(currentOperand)

  console.log(currentOperand, operand1, operator, operand2, currentResult, newOperandEntering);
}

function enterOperator(operButton) {

  if (operand1 === undefined) {
    currentResult = operand1 = parseFloat(currentOperand)
  } else if (operand2 === undefined) {
    operand2 = parseFloat(currentOperand)
    operand1 = currentResult = makeCalculation(operand1, operator, operand2)
    operand2 = undefined
    currentOperand = String(currentResult)
    outputValue(currentOperand)
  } else {
    operand2 = undefined
  }

  operator = operButton.value
  newOperandEntering = true
  outputExpression(operButton)

}

function calculateUnary(unaryOperator) {

  outputExpression(unaryOperator)
  currentOperand = String(makeCalculation(parseFloat(currentOperand), unaryOperator))
  outputValue(currentOperand)
  newOperandEntering = true

}

function calculateResult() {

  if (operator === undefined) {
    return 0
  } else if (operand2 === undefined) {
    operand2 = parseFloat(currentOperand)
  }

  operand1 = currentResult = makeCalculation(operand1, operator, operand2)
  currentOperand = String(currentResult)
  outputValue(currentOperand)
  newOperandEntering = true

  console.log(currentOperand, operand1, operator, operand2, currentResult, newOperandEntering);
}

function deleteLastSymbol() {

  if (newOperandEntering) {
    return 0
  } else if (currentOperand.length === 1) {
    currentOperand = '0'
    newOperandEntering = true
    outputTop.value = outputTop.value.slice(0, -1)
  } else {
    currentOperand = currentOperand.slice(0, -1)
    outputTop.value = outputTop.value.slice(0, -1)
  }

  outputValue(currentOperand)

}

function outputExpression(targetValue) {

  if (typeof targetValue === 'object') {
    switch (targetValue.value) {
      case 'add' :
        outputTop.value += ' + '
        break
      case 'sub' :
        outputTop.value += ' - '
        break
      case 'mul' :
        outputTop.value += ' \u00D7 '
        break
      case 'div' :
        outputTop.value += ' \u00F7 '
        break
    }
  } else {
    switch(targetValue) {
      case 'fact' :
        outputTop.value += '!'
        break
      case 'perc' :
        //TODO:исправить неправильный вывод
        outputTop.value = `1%(${outputTop.value})`
        break
      case 'square' :
        outputTop.value += '\u00B2'
        break
      case 'sqrt' :
        //TODO:исправить неправильный вывод
        outputTop.value = `\u221A(${outputTop.value})`
        break
      default :
        outputTop.value += targetValue
    }
  }

}

function outputValue(targetValue) {
  outputBottom.value = String(targetValue)
}

function clearData() {

  [currentOperand, operand1, operator, operand2, currentResult, newOperandEntering] = ['0', undefined, undefined, undefined, undefined, true]
  outputValue(currentOperand)
  outputTop.value = ''
}

function makeCalculation(a, operator, b = 0) {

  switch (operator) {
    case 'add' :
      return (a + b)
      break
    case 'sub' :
      return (a - b)
      break
    case 'mul' :
      return (a * b)
      break
    case 'div' :
      return calcDivision(a, b)
      break
    case 'fact' :
      return calcFactorial(a)
      break
    case 'perc' :
      return (a / 100)
      break
    case 'square' :
      return Math.pow(a, 2)
      break
    case 'sqrt' :
      return Math.sqrt(a)
      break
  }

}

function calcDivision(a, b) {
  return (b === 0 ? 'Error (x / 0)' : a / b)
}

function calcFactorial(n) {
  return (n != 1) ? n * calcFactorial(n - 1) : 1
}