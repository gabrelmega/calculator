const add = (a, b) => a + b;

const substraction = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => b == 0 ? "ERROR" : a / b;

const display = document.querySelector("#display");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equals = document.querySelector("#result");
const clear = document.querySelector("#clear");

let number1 = 0;
let number2 = "";
let operator = null;
let result = 0;

display.textContent = "0";

numberBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (operator === null) {
            if (display.textContent.length <= 6) {
                if (number1 == result) {
                    display.textContent = e.target.textContent;
                    number1 = e.target.textContent;
                } else {
                    display.textContent += e.target.textContent;
                    number1 += e.target.textContent;
                }
            }
        } else if (operator != null) {
            if (number2.length <= 6) {
                display.textContent += e.target.textContent;
                number2 += e.target.textContent;
            }
        } 
    });
});

operatorBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(operator === null && number2 === "" && display.textContent !== "ERROR") {
            operator = e.target.textContent;
            display.textContent += e.target.textContent;
        } else if (operator != null && number2 != "") {
            if (number2 == "0" && operator == "/") {
                error();
            } else {
                operate();
                display.textContent = result;
                operator = null;
                number1 = result;
                number2 = "";
                operator = e.target.textContent;
                display.textContent += e.target.textContent;
            }
        } else if (operator != null && number2 === "") {
            number2 = number1;
            operate();
            display.textContent = result;
            number1 = result;
            number2 = "";
            operator = e.target.textContent;
            display.textContent += e.target.textContent;
        }
    });
});

equals.addEventListener("click",() => {
    if (number1 !== "" && number2 !== "") {
        operate();
        display.textContent = result;
        operator = null;
        number1 = result;
        number2 = "";
    }
});

clear.addEventListener("click", () => {
    number1 = 0;
    number2 = "";
    result = 0;
    operator = null;
    display.textContent = 0
})

function operate() {
    firstNumber = parseInt(number1);
    secondNumber = parseInt(number2);
    operating = operator
    if (operating == "+") {
        result = add(firstNumber, secondNumber);
    } else if (operating == "-") {
        result = substraction(firstNumber, secondNumber);
    } else if (operating == "*") {
        result = multiply(firstNumber, secondNumber);
    } else if(operating == "/") {
        result = divide(firstNumber, secondNumber);
    }
}

function error() {
    operator = null;
    number1 = 0;
    result = 0;
    display.textContent = "ERROR"
    number2 = ""
}
