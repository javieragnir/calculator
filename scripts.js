let displayHolder = '';
let numberA = '';
let currentOperator = '';
let operatorFlag = false;


const display = document.querySelector('#display')
const displayText = document.querySelector('#displayText')

// Click on numbers
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => button.addEventListener('click', clickNumber));

function clickNumber() {
    if (operatorFlag === true) {
        numberA = displayHolder;
        operatorFlag = false;
        clearDisplay()
    }
    if (displayHolder.length < 9) {
        displayHolder += this.textContent;
        displayText.textContent = displayHolder;
        updateDisplay();
    }
 }

 function updateDisplay() {
    displayText.textContent = displayHolder;
    return;
 }

// Click on decimal
const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', clickDecimal);

function clickDecimal() {
    if (displayHolder.search('\\.') === -1) {
        displayHolder += '.';
        displayText.textContent = displayHolder;
        updateDisplay();
    }
    return;
}

// Click on clear
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clickClear);

function clickClear() {
    inputTracker = [];
    clearDisplay();
 }

 function clearDisplay() {
    displayHolder = '';
    displayText.textContent = '0';
 }

// Click on operator
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener('click', clickOperator))

function clickOperator() {
    // If there are two previous numbers in memory
        // Perform the operation on the two previous numbers
        // Store the result as the previous number (first)
    
    // Else 
        // Add this number to memory
    if (numberA !== '' && displayHolder !== '') {
        clickEquals();
    }

    currentOperator = this.id;
    console.log(currentOperator);
    operatorFlag = true;
    return;
}

// Click on equals
const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', clickEquals);

function clickEquals() {
    if (currentOperator === '') {
        return;
    }
    displayHolder = operate(currentOperator, numberA, displayHolder);
    numberA = displayHolder;
    currentOperator = '';
    updateDisplay();
}

// Mathematical functions
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function divi(a, b) {
    return a / b;
}

function operate(op, a, b) {
    a = Number(a);
    b = Number(b);

    let result = '';

    if (op === 'plus') {
        result = add(a, b);
    } else if (op === 'minus') {
        result = sub(a, b);
    } else if (op === 'multiply') {
        result = mult(a, b);
    } else if (op === 'divide') {
        result = divi(a, b);
    } else {
        console.log('Error: operate function invalid operation');
        return;
    }
    if (result > 999999999) {
        return '999999999'
    }
    return result.toString().substring(0, 9);
}

// Click on back
const backButton = document.querySelector('#back');
backButton.addEventListener('click', clickBack);

function clickBack() {
    displayHolder = displayHolder.slice(0, displayHolder.length - 1);
    displayText.textContent = displayHolder;
    updateDisplay();
}

// Click on plus/minus
const signageButton = document.querySelector('#signage');
signageButton.addEventListener('click', clickSignage);

function clickSignage() {
    displayHolder = (Number(displayHolder) * -1).toString();
    displayText.textContent = displayHolder;
    updateDisplay();
}
