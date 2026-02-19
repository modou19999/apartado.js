// Expresiones y sentencias

// - sentencias se componen de expresiones
// - una expresión es cualquier fragmento de código que produce un valor

let n = 5 * 5; // esta es una sentencia completa
console.log(5 * 5); // otra sentencia completa
console.log(25); // otra sentencia completa, pero aquí 25 es una expresión
// en este caso, "5 * 5" es una expresión que produce el valor 25
// y "n" es una variable que almacena ese valor
console.log(n); // aquí "n" es una expresión que produce el valor almacenado en la variable
// las expresiones pueden ser tan simples como un número o una variable

// expresiones:
// Datos
// Variables
// operadores

// Datos: string
let name = 'Pepe'; // "Pepe" es una expresión de tipo cadena
let surname = 'Perez'; // 'Perez' es una expresión de tipo cadena

let longName = name + ' ' + surname; // la expresión name + ' ' + surname produce el valor "Pepe Perez"
console.log(longName); // longName es una expresión que produce el valor almacenado en la variable

// Template string
let formatName = `
Pepe
Perez
`; // `Pepe Perez` es una expresión de tipo cadena usando template string

console.log(fullName); // fullName es una expresión que produce el valor almacenado en la variable

let fullName = `${name} ${surname}`; // `${name} ${surname}` es una expresión que produce el valor "Pepe Perez"
console.log(fullName); // fullName es una expresión que produce el valor almacenado en la variable

// Operadores aritméticos
let result;
result = 2 + 2; // suma
result = 2 - 2; // resta
result = 2 * 2; // multiplicación
result = 3 / 2; // división
result = 3 % 2; // módulo (resto de la división) &

const a = 2;
console.log(typeof a); // number ( por que es number?)

console.log('2' + 2 + 2); // aquí "2" + 2 produce la expresión "22", y luego "22" + 2 produce "222"
// a -> string
// +
// 2 -> "2" //coerción (de tipo implícita) o casting automatico
// "22"
console.log(2 + 2 + '2'); // aquí 2 + 2 produce la expresión 4, y luego 4 + "2" produce "42"
console.log(Number('a') + 2); // casting  ( que es casting?)  NaN + 2 = NaN

const b = '2';
console.log(typeof b); // String
console.log(Number(b) + 2); // casting explicito
console.log(typeof b);

const c = '2';
console.log(typeof c); // string
c = Number(c); // casting explicito
console.log(c + 2); // 4
console.log(typeof c); // Number
// number() -> función global que convierte un valor a número
// String() -> función global que convierte un valor a cadena
// Boolean() -> función global que convierte un valor a booleano

// number
console.log(0 / 12); // 0
console.log(12 / 0); // Infinity
console.log(0 / 0); // NaN
console.log('Pepe' - 2); // NaN

// Coercion de boleanos
// Falsies -> coersion a false
// truties -> coersion a true

// truties -> coersion a true
console.log(Boolean(true)); // true
console.log(Boolean(22)); // true
console.log(Boolean(-22)); // true
console.log(Boolean('Pepe')); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true

// Falsies -> coersion a false
console.log(Boolean(0)); // false
console.log(Boolean(false)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean('')); // false
