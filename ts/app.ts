// Function to append characters to the display
function appendToDisplay(value: string): void {
	const display = document.getElementById('display') as HTMLInputElement;
	display.value += value;
}

// Function to clear the display
function clearDisplay(): void {
	const display = document.getElementById('display') as HTMLInputElement;
	display.value = '';
}

// Function to perform backspace operation
function backspace(): void {
	const display = document.getElementById('display') as HTMLInputElement;
	display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult(): void {
	const display = document.getElementById('display') as HTMLInputElement;
	try {
			display.value = eval(display.value);
	} catch (e) {
			display.value = 'Error';
	}
}
