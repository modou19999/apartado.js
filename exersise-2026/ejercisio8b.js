// 8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.

// al cubo = numero * numero * numero
function cube(b) {
    const result = b * b * b;
    return result;
}

function square(b) {
    const result = b * b;
    return result;
}

console .log(cube(3));
console .log(square(3));

function pow(base, exp) {
    const result = base**exp; // operador de exponenciacion
    return result;
}


/*function cube(b) {
    const result =  // otra forma de elevar al cubo
    Math.pow(b, 3); // otra forma de elevar al cubo solo recive 2 parametros
    b * b * b; // otra forma de elevar al cubo
    return result;
}
    */
