// condition
let i = 1;
const LIMIT = 5;

    i++;


if (i > LIMIT) {
    console.log("es un numero pequeño");
} else if (i % 2 === 0) {
    console.log(i + " es un número par");
} else {
    console.log(i + " es un número impar");
}

console.log("Valor final de i: " + i);
