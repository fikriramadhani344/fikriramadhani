let currentInput = '';  // Menyimpan input sementara
let previousInput = '';  // Menyimpan input sebelumnya
let operator = '';  // Menyimpan operator aritmatika yang digunakan

// Menambahkan angka ke input
function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

// Menambahkan operator
function appendOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Menghitung hasil
function calculateResult() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Error';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay(currentInput);
}

// Mengupdate tampilan kalkulator
function updateDisplay(value) {
    document.getElementById('result').value = value;
}

// Membersihkan input
function clearResult() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('');
}
