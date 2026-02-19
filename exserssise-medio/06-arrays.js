//Arrays
const user = ['Pepe', 22, 'Developer']
console.log(user)
console.log(user[0])

// Excentricidad
user.id = 1
console.log(user)

const userContact = ("Luis", "Ramon", "Rosa")

//for con Arrays
// for clásico	Recorrer arrays o repetir X veces
// for...in	Recorrer propiedades de objetos


let frutas = ["manzana", "banana", "naranja"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// frutas.length → cantidad de elementos
// frutas[i] → accede a cada elemento

// Qué pasa aquí?
// let i = 0 → empieza en 0
// i < 5 → se repite mientras sea menor que 5
// i++ → suma 1 cada vez


// for clásico	Usa índice
// for...in	Claves (objetos)
// for...of	Valores (arrays, strings, etc.)

// Ejemplo con String
let texto = "Hola";

for (let letra of texto) {
  console.log(letra);
}


// for clásico → Usa un índice numérico para repetir algo.
// Ideal cuando necesitas la posición.

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }


// for...in → Recorre las claves (propiedades) de un objeto.

// for (let clave in persona) {
//   console.log(clave);
// }


// for...of → Recorre los valores directamente (arrays, strings, etc.).

// for (let fruta of frutas) {
//   console.log(fruta);
// }


// Resumen rápido:
// for → índice
// for...in → claves
// for...of → valores

// Propiedades de array
