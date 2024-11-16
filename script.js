function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateTrig(func) {
    const display = document.getElementById('display');
    let value = parseFloat(display.value);
    if (isNaN(value)) return;

    switch (func) {
        case 'sin':
            display.value = Math.sin(value * Math.PI / 180).toFixed(8);
            break;
        case 'cos':
            display.value = Math.cos(value * Math.PI / 180).toFixed(8);
            break;
        case 'tan':
            display.value = Math.tan(value * Math.PI / 180).toFixed(8);
            break;
    }
}
