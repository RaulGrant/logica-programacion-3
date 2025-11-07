/**
 * Calcula el factorial de un número
 * @param {number} n - El número del cual calcular el factorial
 * @returns {number} El factorial del número
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

/**
 * Valida si el input es un número válido
 * @param {string} input - El valor ingresado por el usuario
 * @returns {boolean} true si es un número válido, false en caso contrario
 */
function esNumeroValido(input) {
    // Verificar que no esté vacío
    if (input.trim() === '') {
        return false;
    }
    
    // Convertir a número
    const num = Number(input);
    
    // Verificar que sea un número válido, no sea NaN, y sea un entero no negativo
    if (isNaN(num) || !Number.isFinite(num) || num < 0 || !Number.isInteger(num)) {
        return false;
    }
    
    return true;
}

/**
 * Función principal que solicita el número y calcula el factorial
 */
function calcularFactorial() {
    const inputElement = document.getElementById('numero');
    const resultadoElement = document.getElementById('resultado');
    const input = inputElement.value;
    
    // Validar si el input es un número válido
    if (!esNumeroValido(input)) {
        resultadoElement.className = 'error';
        resultadoElement.textContent = 'Error: Por favor ingrese un número entero válido (no negativo).';
        console.error('Error: El dato de entrada no es un número válido.');
        return;
    }
    
    // Convertir a número
    const numero = Number(input);
    
    // Calcular factorial
    const resultado = factorial(numero);
    
    // Mostrar resultado en el DOM
    resultadoElement.className = 'success';
    resultadoElement.textContent = `El factorial de ${numero} es: ${resultado}`;
    
    // Imprimir resultado por consola
    console.log(`Entrada: ${numero}`);
    console.log(`Salida: ${resultado}`);
}

// Permitir calcular con Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('numero');
    if (inputElement) {
        inputElement.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                calcularFactorial();
            }
        });
    }
});
