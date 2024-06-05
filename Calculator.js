document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');

    function appendToDisplay(value) {
        // Avoid multiple consecutive operators
        if (isOperator(value) && isOperator(display.value.slice(-1))) {
            display.value = display.value.slice(0, -1) + value;
        } else {
            display.value += value;
        }
    }

    function calculate() {
        try {
            // Evaluate the expression only if it's valid
            if (display.value.trim() !== '') {
                display.value = eval(display.value);
            }
        } catch (error) {
            display.value = 'Error';
        }
    }

    function clearDisplay() {
        display.value = '';
    }

    function isOperator(character) {
        return ['+', '-', '*', '/'].includes(character);
    }

    // Handle keyboard input
    document.addEventListener('keydown', function(event) {
        const key = event.key;

        if (key >= '0' && key <= '9') {
            appendToDisplay(key);
        } else if (isOperator(key)) {
            appendToDisplay(key);
        } else if (key === 'Enter') {
            calculate();
        } else if (key === 'Backspace') {
            display.value = display.value.slice(0, -1);
        } else if (key === 'Escape') {
            clearDisplay();
        }
    });

    window.appendToDisplay = appendToDisplay;
    window.calculate = calculate;
    window.clearDisplay = clearDisplay;
});
