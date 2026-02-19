// camelCase
// kebab-case
// snake_case
// pascalCase
//CONSTATNTES (aveces se escribbe todo en mayusculas)

//declararlar + inicializar
const PI = 3.14; 
// no existe modificacion
PI = 3.15 // da error

// declararlar una variable se hace entre estas 2 palabras reservadas
// var (depreacada, no usar)
// let (puede cambiar su valor)

let userAge;
console.log(typeof userAge); // undefined
// Asignacion de valor o inicializacion
userAge = 22;
console.log(typeof userAge); // number
//modificacion
userAge = 23;

//declararlar + inicializar
let userName = 'Pepe';
// modificacion
userName = 'Jose';

// objetos

// PROCESO + ASIGNACION
const user = {
    name: 'Luis',
    age: 24
}

console.log(user.age)
// se llama mutar el objeto
user.age = 25;
console.log(user.age)
// user = {} 
// esto no se puede reasignar un objeto declarado con const
// user.job = 'Developer'; DA ERROR
// delete user.name DA ERROR
console.log(user)

