import add from "./add.js";
import divide from "./division.js";
import multiply from "./multiply.js";
import subtract from "./subtract.js";

export const calculate= function (firstNumber, secondNumber, operator) {
  let result;
  switch(operator) {
    case 'multiply':
      result= multiply(firstNumber, secondNumber)
      break;
    case 'add':
      result = add(firstNumber, secondNumber) 
      break;
    case 'divide':
      result = divide(firstNumber, secondNumber)
      break;
    case 'subtract':
      result = subtract(firstNumber, secondNumber)
      break;
    case 'percentage':
      result = firstNumber/100
      break;
  }
  return result
}

