// Nivel Básico (5 ejercicios)

// 1- Escribe un programa que muestre en la consola: "Hola, mundo!".
console.log("Hola mundo!");
console.log("SOY EL ANFITRIÓN");

// 2- Pide al usuario dos números y muestra su suma en la consola.
let num1 = 25;
let num2 = 10;
console.log(num1 + num2);

let num4 = 26;
let num5 = 12;
console.log(num4 + num5);

//rest
let num10 = 1200;
let num11 = 600;
let num12 = 300;
let num13 = 100;
let rest = num10 - num11 - num13 - num12;
console.log(rest);

//multiple
let num14 = 200;
let num15 = 400;
let num16 = 500;
let num17 = 100;
let multiple = num10 * num11 * num13 * num12;
console.log(multiple);

//division
let num18 = 200;
let num19 = 400;
let num20 = 500;
let num21 = 100;
let div = ((num10 % num11) % num13) % num12;
console.log(div);

// 3* Pide al usuario un número y muestra si es par o impar.
//////// num3 % 2 calcula el resto de dividir num3 entre 2.
//////// Por ejemplo, 7 % 2 da 1 porque 7 dividido entre 2 da 3 con resto 1.
//////// === 0 comprueba si el resto es exactamente igual a 0, lo que significaría que num3 es divisible por 2, es decir, un número par.
//impar
let num3 = 17;
//Esta línea inicia una condición que verifica si num3 es par.
if (num3 % 2 === 0) {
  console.log(num3 + " el numero es par");
}
// Como 17 no es divisible entre 2, entra en el else.
else {
  console.log(num3 + " el numero es impar");
}

// par
let num7 = 202;
if (num7 % 2 === 0) {
  console.log(num7 + " El numero es par");
} else {
  console.log(num7 + " El numero es impar");
}

//impar
let num6 = 18;
if (num6 % 2 === 0) {
  console.log(num6 + " El numero es par");
} else {
  console.log(num6 + " El numero es impar");
}

//impar
let num8 = 201;
let num9 = 204;
let sum = num8 + num9;
if (sum % 2 === 0) {
  console.log(sum + " El numero es par");
} else {
  console.log(sum + " El numero es impar");
}

// 4- Usa un bucle for para imprimir los números del 1 al 10 en la consola.
////////// let i = 1 → Inicializa la variable i en 1.
////////// for es la estructura de control que permite repetir un bloque de código varias veces. también se le llama bucle for para ca.
////////// Esta será la variable de control del bucle.
////////// i <= 10 → Condición que se verifica antes de cada iteración.
////////// Mientras i sea menor o igual a 10, el bucle continuará
////////// i++ → Incrementa i en 1 después de cada vuelta del bucle.
let i = 1;
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// cuenta hasta 5
let a = 1;
for (let a = 1; a <= 5; a++) {
  console.log(a + " cuenta hasta 5");
}

//cuenta de 6 a 10
let b = 6;
for (let b = 6; b <= 10; b++) {
  console.log(b + " cuenta de 6 a 10");
}

// 5- Pide al usuario una palabra y muestra esa palabra en mayúsculas. Convertir a mayúsculas
let palabra = "Hola soy un programador y estoy probando java script";
console.log(palabra.toUpperCase());

let mensaje =
  "Te habla el anfitrión, bienvenido a bordo, ponte cómoda y disfruta las vistas";
let name = " Sra Lucia";
let lastName = " Rodrigues!";
let gen = mensaje + name + lastName;
console.log(gen);

// ahora todo en mayúscula
let mensaje1 =
  "Te habla el anfitrión, bienvenido a bordo, ponte cómoda y disfruta las vistas";
let name1 = " Sra Lucia";
let lastName1 = " Rodrigues!";
let gen1 = mensaje + name + lastName;
console.log(gen1.toUpperCase());

// Nivel Medio (5 ejercicios)

// Promedio de un array
// Crea un array de números y calcula su promedio.
// Un array es una estructura de datos que sirve para almacenar varios valores en una sola variable.
// Cada valor dentro de un array se llama elemento.
// Los elementos se guardan en orden, y cada uno tiene un índice empezando desde 0.
let números = [2, 6, 9, 11, 19, 25];
let suma = 20;
for (let i = 0; i < números.length; i++) {
  suma += números[i];
}
let promedio = suma / números.length;
console.log("El promedio es: " + promedio);

// Invertir una cadena
// Pide al usuario un texto y muestra la cadena invertida.

// Tabla de multiplicar
// Pide un número y muestra su tabla de multiplicar del 1 al 10 en la consola.

// Contar vocales
// Pide una frase y muestra cuántas vocales contiene.

// Número mayor
// Dado un array de números, encuentra y muestra el mayor número.

// Nivel Avanzado (5 ejercicios)

// FizzBuzz
// Imprime los números del 1 al 100.
// Si es múltiplo de 3, imprime "Fizz".
// Si es múltiplo de 5, imprime "Buzz".
// Si es múltiplo de ambos, imprime "FizzBuzz".

// Palindrome
// Pide una palabra y determina si es un palindrome (se lee igual al derecho y al revés).

// Ordenar un array
// Crea un array de números y ordenado de menor a mayor sin usar .sort().

// Contar palabras
// Pide una frase y muestra cuántas palabras únicas tiene.

// Generar números aleatorios únicos
// Genera un array con 10 números aleatorios entre 1 y 20, sin repetir ninguno.
