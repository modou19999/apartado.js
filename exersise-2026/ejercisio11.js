// Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar

function isEvenOrOdd(n) {
    let result = "impar";
    if (n % 2 === 0) {
        result = "par";
    } else {
        result = "impar";
    }
    return result; // devuelve el resultado
}


console.log(isEvenOrOdd(21)); // impar
console.log(isEvenOrOdd(22)); // par



/*  version alternativa
function isEvenOdd(n) {
    let result = "";
    if (n % 2 === 0) {
        result = "par";
    } else {
        result = "impar";
    }
    return result; // devuelve el resultado
}
*/

// operador ternario
function isEvenOdd(n) {
    let result = (n % 2 === 0) ? "par" : "impar";
    return result;
}

console.log(isEvenOrOdd(21)); // impar
console.log(isEvenOrOdd(22)); // par

