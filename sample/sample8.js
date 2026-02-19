// Arrays (listas de elementos) -> listas de arreglos

const list = ['pepe', 22, true, 'juan']; // forma de declarar un array con elementos
const numbers = [1, 2, 3, 4, 5]; // forma de declarar un array con elementos
const contacts = ['pepe', 'juan', 'maria']; // forma de declarar un array con elementos

console.log(list.length); // length es la propiedad que nos dice cuantos elementos tiene el array
console.log(contacts[0]); // acceder al primer elemento del array (los arrays empiezan en la posicion 0)
contacts[0] = 'jose'; // mutar el primer elemento del array
console.log(contacts[0]); // imprimir el array completo
contacts[3] = 'luis'; // agregar un nuevo elemento al final del array
console.log(contacts); // imprimir el array completo
contacts.push('ana'); // agregar un nuevo elemento al final del array con push
console.log(contacts); // imprimir el array completo

for (let i = 0; i < contacts.length; i++) {
    const element = contacts[i];
    //console.log("Hola " + element);
}
//console.log(contacts[1]); // acceder al segundo elemento del array
//console.log(contacts[2]); // acceder al tercer elemento del array
// mutuar el array (cambiar un elemento del array) eso es mutable
