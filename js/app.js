// Function to append characters to the display
function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}
// Function to clear the display
function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
}
// Function to perform backspace operation
function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
// Function to calculate the result
function calculateResult() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    }
    catch (e) {
        display.value = 'Error';
    }
}
