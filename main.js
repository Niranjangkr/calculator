let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let resetScreen = false;

// clear Button
let clearButton = document.getElementsByClassName('clearButton')[0]
clearButton.addEventListener('click', () =>{
    firstNumber = ''
    secondNumber= ''
    operator = ''
    result = ''
    updateDisplay('')
})

// eqButton
let eqButton = document.getElementsByClassName('eqButton')[0];
eqButton.addEventListener('click', ()=>{
    result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    firstNumber = result;
    secondNumber = ''
    operator = ''
    updateDisplay(result);
})

// operator button
let opButtons = document.getElementsByClassName('opButton')
for(let i = 0; i < opButtons.length ; i++){
    opButtons[i].addEventListener('click', () =>{
        operator = opButtons[i].textContent;
    })
}

// buttons 
let numButton = document.getElementsByClassName("numButton")

// keyboard
const handleKeyPress = (event) => {
    let key = event.key
    if(key === 'Enter'){
        result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        firstNumber = result;
        secondNumber = ''
        operator = ''
        updateDisplay(result);
    }

    if(key === 'c' || key === 'C'){
        firstNumber = ''
        secondNumber= ''
        operator = ''
        result = ''
        updateDisplay('')
    }
    // checking if number or operator 
    if(/^[0-9+\-*/.=]$/.test(key)){
    if(/^[+\-*/]$/.test(key)){
            operator = key;
        }else if(operator === ''){
            firstNumber += key
            updateDisplay(firstNumber)
        }else{
            secondNumber += key
            updateDisplay(secondNumber);
        }

    }
}

// updateDisplay
let display = document.getElementById('display');
function updateDisplay(number){
    display.textContent = number
} 

document.addEventListener('keydown', handleKeyPress);

for(let i = 0; i < numButton.length; i++){
numButton[i].addEventListener('click', () => {
    if(operator == ""){
        firstNumber += numButton[i].textContent //instead of this use numButton[i]
        updateDisplay(firstNumber)
    }else{
        secondNumber += numButton[i].textContent;
        updateDisplay(secondNumber)
    }
}) 
}

function operate(operator, a, b){
    switch(operator){
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b)
        default:
            return null;
    }
}

function add(a, b) {
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0) {
        return 'Error! Division by zero is undefined'
    }else{
        return a / b;
    }
}