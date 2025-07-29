let numOne = 0;
let numTwo = 0;
let operator = "";
let outputP = document.querySelector("#display");
const operators = "+-*/";
let currentInput = "";

const buttons = document.querySelectorAll("button");
buttons.forEach(item => {
    item.addEventListener("click", () => {
        printValue(item.textContent);
        currentInput += item.textContent;

        if (!operators.contains(currentInput[currentInput.length - 1])) {
            
        }
    })
})

function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return numOne / numTwo;
}

function operate(numOne, numTwo, operator) {
    switch (operator) {
        case "+":
            add(numOne, numTwo);
            break;
        case "-":
            subtract(numOne, numTwo);
            break;
        case "*":
            multiply(numOne, numTwo);
            break;
        case "/":
            divide(numOne, numTwo);
            break;
    }
}

function printValue(value) {
    outputP.textContent += value;
}