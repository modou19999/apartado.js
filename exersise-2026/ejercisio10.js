// Crea una función que imprima por consola un número al azar entre 0 y 10.
/*
function randomNumber(){
    Math.floor(5.9999)//5
    Math.trunc(5.9999999)//5
    Math.ceil(5.0001)//6
    Math.round(5.6)//6
}
*/

// Math" general nuemeros random
// floor redondea por ejemplo si es 5.99999directamente pone 5 y no un numero superior

/*function randomNumber() {
  return Math.floor(Math.random) * 10;
}

console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
*/
// con esta formula no sale el 10 (no utilizar flor)

function randomNumber() {
  return Math.floor(Math.random) * 10;
}

console.log(randomNumber());

for (let i = 1; i < 10; i++) {
  console.log(i, randomNumber); // probar bporrando i,
}
