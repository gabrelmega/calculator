function add(a, b) {
    return a + b;
}

function substraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const display = document.querySelector("#display");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equals = document.querySelector("#result")

let number1 = "";
let number2 = "";
let operator = null;

numberBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        display.textContent += e.target.textContent;
    });
});

operatorBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(operator === null) {
            operator = e.target.textContent
            display.textContent += e.target.textContent;
        } else {
            operate()
        }
    });
});

function operate() {
    const firstNumber = number1;
    const secondNumber = number2;
    const sign = operator;
    const result = ""
    if (sign == "+") {
        add(firstNumber, secondNumber);
    } else if (sign == "-") {
        substraction(firstNumber, secondNumber);
    } else if (sign == "*") {
        multiply(firstNumber, secondNumber);
    } else if(sign == "/") {
        divide(firstNumber, secondNumber);
    }
}