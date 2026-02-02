 let currentInput = "";

const display = document.getElementById('display');

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    
    if (currentInput === "0") {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === "") return;
    const lastChar = currentInput.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar)) return;

    currentInput += operator;
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === "") currentInput = "0";
    updateDisplay();
}

function calculate() {
    try {
      if(currentInput==="Infinity" || currentInput===NaN){
          currentInput="Inf";
        }
        else{
        currentInput = eval(currentInput).toString();
        
        
        if(currentInput==="Infinity" || currentInput===NaN){
          currentInput="Inf";
        }
        else{
          currentInput="="+currentInput;
        }
      }
        updateDisplay();
    } catch (error) {
        currentInput = "Error";
        updateDisplay();
    }
}

function updateDisplay() {
    display.innerText = currentInput;display.scrollLeft = display.scrollWidth;
}
window.addEventListener('keydown', (event) => {
    const key = event.key;

    if (/[0-9.]/.test(key)) {
        appendNumber(key);
    }

    if (['+', '-', '*', '/'].includes(key)) {
        appendOperator(key);
    }

    if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    }

    if (key === 'Backspace') {
        deleteLast();
    }

    if (key === 'Escape') {
        clearDisplay();
    }
});


