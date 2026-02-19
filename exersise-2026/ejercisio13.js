//13. Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.

function printMultiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    const m = n * i;
    console.log(`${n} x ${i} = ${m}`); // asi es la tabla de multiplicacion
  }
}

printMultiplicationTable(8); // Llamada a la función con el número 8 como ejemplo

//13. Crea una función que calcule y retorne la tabla de multiplicar de un número introducido como parámetro.

function calculeMultiplicationTable(n) {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    const m = n * i;
    const message = `${n} x ${i} = ${m}`;
  }
  return result;
}

console.log(calculeMultiplicationTable(8));
console.log();
