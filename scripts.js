let displayHolder = '';
let inputTracker = [];

const display = document.querySelector('#display')
const displayText = document.querySelector('#displayText')

// Click on numbers
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => button.addEventListener('click', displayNumber));

// Click on clear
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearAll);

// Input to display
function updateDisplay() {
    let input = prompt('Value')
    displayText.textContent = input;
}

// Input number to display
function displayNumber() {
    if (displayHolder.length <= 9) {
        displayHolder += this.textContent;
        displayText.textContent = displayHolder;
    }
 }

 // Clear all inputs
 function clearAll() {
    displayHolder = '';
    inputTracker = [];
    displayText.textContent = 0;
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
    if (op == '+') {
        return add(a, b);
    } else if (op == '-') {
        return sub(a, b);
    } else if (op == '*') {
        return mult(a, b); 
    } else if (op == '/') {
        return divi(a, b);
    } else {
        return;
    }
}

