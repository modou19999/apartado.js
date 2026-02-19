// 9. Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro. (base, altura)

function rectangleArea(base, height) {
  const result = base * height;
  return result;
}

const b = 3; // hay 2 b la b del linea 8 no es la mima que b en la linea 3 por estar fuera de la function
const h = 2;
console.log(rectangleArea(3, h));
