let currentInput = '';
let currentOperator = '';
let previousInput = '';

let display = document.querySelector('#display')

function appendNumber(number) {
    currentInput += number;
    display.textContent = `${previousInput} ${currentOperator} ${currentInput}`;
}

function appendOperator(operator) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '';
    display.textContent = `${previousInput} ${currentOperator}`;
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Cannot divide by zero');
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperator = '';
    previousInput = '';
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperator = '';
    display.textContent = '';
}