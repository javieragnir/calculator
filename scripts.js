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