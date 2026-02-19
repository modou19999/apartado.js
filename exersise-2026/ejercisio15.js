/*
Adivina el número: Crea una función que primero guarde en una variable un número 
aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un
número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, 
imprime por consola un string indicando que el usuario ha acertado, sino,
 imprime por consola que el usuario ha fallado seguido del número correcto.
 */

import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function game() {
  const name = prompt('Dime tu nombre?');
  console.log('Hola (Pepe)');
  const n = prompt('Dime un numero del 1 al 10?');
  console.log(n);
  if (isName(n)) {
    console.log('Eso no es un numero');
    return;
  }
  n = Number(n);
  const t = Math.trunc(n);
  console.log(t);
  console.log(n);

  if (Math.trunc(n) !== n) {
    console.log('El numero no es entero');
    return;
  }
  if (n < 1 || n > 10) {
    console.log('El numero no es valido');
    return;
  }
  console.log(n);
  //const randonN = randonNumber();
  //console.log();
  if (n === randonN) {
    console.log('muy bien ${name}');
    console.log(' ${name} = Pepe');
  }
}
game();

// || esto es un O
// && esto es y pregunntas de examen

/*
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function game() {
  const name = prompt('Dime tu nombre');
  console.log('Hola $(name)');
  const n = prompt('Dime un numero del 1 al 10?');
  console.log(n);
}
game();
*/

/*
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function game() {
  const name = prompt('Dime tu nombre');
  console.log('Hola $(name)');
  const n = prompt('Dime un numero del 1 al 10?');
  console.log(n);
  if (isName(n)) {
    console.log('Eso no es un numero');
    return;
  }
  if (n < 1 || n > 10) {
    console.log('El numero no es valido');
    return;
  }
  console.log(n);
}
game();

*/

/*
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function game() {
  const name = prompt('Dime tu nombre');
  console.log('Hola $(name)');
  const n = prompt('Dime un numero del 1 al 10?');
  console.log(n);
  if (isName(n)) {
    console.log('Eso no es un numero');
    return;
  }
  n = Number;

  if (Math.trunc(n) !== n) {
    console.log('El numero no es entero');
    return;
  }
  if (n < 1 || n > 10) {
    console.log('El numero no es valido');
    return;
  }
  console.log(n);
}
game();
*/

// corchete  []
// entre llave {}
// entre prentecis ()
