//14. Crea una función que reciba un número por parámetros e imprima por consola si el número recibido es un número primo.

function isPrime(n) {
  let result = true;
  for (let i = 2; i < n; i++) {
    console.log(i);
    if (n % i === 0) {
     result = false;
     break;
      //return false
    }
  }
  return result;
}

console.log("7 es", isPrime(7) ? "Primo" : "No Primo");
console.log("21 es", isPrime(21) ? "Primo" : "No Primo");
console.log("x es", isPrime(721) ? "Primo" : "No Primo");



//console.log(isPrime(7) ? "Primo" : "No Primo");
//console.log(isPrime(21) ? "Primo" : "No Primo");

/* 

function isPrime (n) {
    let result = true
    for (let i = 2; i < n; i++) {
        console.log (i)
        if(n%i === 0){
        result = false
    
    }
    return result

}

isPrime(7)


*/
/*
function isPrime(n) {
  let result = true;
  for (let i = 2; i < n; i++) {
    console.log(i);
    if (n % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}

console.log("7 es" isPrime(7) ? "Primo" : "No Primo");
console.log("21 es"isPrime(21) ? "Primo" : "No Primo");
*/
/*
function isPrime(n) {
  let result = true;
  for (let i = 2; i < n; i++) {
    console.log(i);
    if (n % i === 0) {
      //result = false;
      //break;
      return false
    }
  }
  return result;
}

console.log("7 es" isPrime(7) ? "Primo" : "No Primo");
console.log("21 es"isPrime(21) ? "Primo" : "No Primo");
*/
/*
function isPrime(n) {
  let result = true;
  for (let i = 2; i < n; i++) {
    console.log(i);
    if (n % i === 0) {
     result = false;
     break;
      //return false
    }
  }
  return result;
}

console.log("7 es", isPrime(7) ? "Primo" : "No Primo");
console.log("21 es", isPrime(21) ? "Primo" : "No Primo");
console.log("x es", isPrime(721) ? "Primo" : "No Primo");
*/
