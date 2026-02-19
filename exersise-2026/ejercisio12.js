// Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).

function reverse(text) {
  console.log(text.length);// text.length es la longitud del string cuenta los caracteres da igual que sean espacios numero o letras
  console.log(text);
}

reverse('Pepe Perez');


// ctrl +d para seleccionar la siguiente ocurrencia de la plabara varias veces
// text[i] para acceder a cada caracter del string
// text.charAt(i) otra forma de acceder a cada caracter del string
// text.split('') convierte el string en un array de caracteres


function reverse(text) {
  let reversed = '';

  for (let i = 0; i < text.length; i++) {
    // reversed += text[i];
    result = text[i] + result;
  }
  return result;
}

console.log(reverse('Pepe Perez'));
