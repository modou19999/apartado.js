// Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.


// esto es una asignacion de una expresion funcional (funcion anonima asignada a una variable)
const multiply = function(a, b) {
    const result = a * b;
    return result;
}

const r = multiply(5, 3);  // llama a la función para ejecutar la acción pero en este caso con dos números como argumentos da error
console.log(r);



// Asignacion de una expresion funcion ARROW (funcion anonima asignada a una variable)
const multiplyArrow = (a, b) => {
    const result = a * b;
    return result;
}

const r2 = multiplyArrow(5, 3);
console.log(r2);
