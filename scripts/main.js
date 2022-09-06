import {calculate} from "./calculate.js";



// GET ALL ELEMENT IN THE DISPLAY SECTION
const disChar = document.querySelector('.characterdisplay');
const disResult = document.querySelector('.resultdisplay');


let operatorclick = false;
let operatorType = '';
let firstNumber = '0';
let secondNumber ='0';

// All NUMBER IN THE PROJECT
const allNumberButton = document.getElementsByClassName('operand')
for (let i=0; i<allNumberButton.length; i++) {
  allNumberButton[i].addEventListener('click', (e)=>{
    disChar.innerHTML += e.target.value
    if (operatorclick){
      secondNumber += e.target.value
      
    } else {
      firstNumber += e.target.value
    }
    console.log (firstNumber)
    console.log(secondNumber)
  })
}


// ALL ARITHMETIC OPERATOR
const allOperator = document.getElementsByClassName('operator')
for (let i=0; i<allOperator.length; i++) {
  allOperator[i].addEventListener('click', (e) =>{
    if(e.target.value === 'percentage') {
      if(operatorType) {
        return
      }
      operatorType = e.target.value
      const result = calculate(parseFloat(firstNumber), undefined, operatorType)
      disResult.innerHTML = result
      disChar.innerHTML = result
      firstNumber = result.toString()
      operatorType = ''
      return
    }
    if (operatorclick) {
      if (secondNumber === '0') {
        return
      }
      const result = calculate(parseFloat(firstNumber), parseFloat(secondNumber), operatorType)
      disResult.innerHTML = result
      disChar.innerHTML = result
      firstNumber = result.toString()
      secondNumber = '0'
      console.log(disResult.innerHTML)
    } else {
      if (firstNumber === '0') {
        if(!disResult.innerHTML) {
          return
        } else {
          firstNumber += disResult.innerHTML
          disChar.innerHTML = disResult.innerHTML
        }
        
      }
      operatorclick = true
    }
    disChar.innerHTML += e.target.textContent
    operatorType = e.target.value
  })
}

console.log(allNumberButton)

// EQUAL TO BUTTON 
const btnequal = document.querySelector('.equalto');
btnequal.addEventListener('click', equalto)
function equalto() {
  if (firstNumber === '0' || secondNumber === '0' || operatorType ==='') {
    return
  }
  const result = calculate(parseFloat(firstNumber), parseFloat(secondNumber), operatorType)
  disResult.innerHTML = result;
  disChar.innerHTML = '';
  firstNumber = '0';
  secondNumber = '0';
  operatorType = '';
  operatorclick = false
}

const btnClear = document.querySelector('.clear')
btnClear.addEventListener('click', function() {
  disChar.innerHTML = ' ';
  disResult.textContent = ' ';
  firstNumber = '0';
  secondNumber = '0';
  operatorType = '';
  operatorclick = false
});

// THE DELETE BUTTON
const btndel = document.getElementById('delete')
btndel.addEventListener('click', del)

function del () {
  if(!disChar.innerHTML) {
    return
  }
  disChar.innerHTML = disChar.innerHTML.slice(0, -1)
  if (operatorType) {
    if (secondNumber == '0') {
      operatorType = ''
      operatorclick = false
    }
    secondNumber = secondNumber.slice(0, -1)
    console.log(secondNumber)
  } else {
    firstNumber = firstNumber.slice(0, -1)
    console.log(firstNumber)
  }
}

