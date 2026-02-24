# Apartado HTML

1️⃣ Acceder a elementos del body

<p id="mensaje">Hola mundo</p>
const mensaje = document.getElementById("mensaje");
console.log(mensaje);

Otras formas:

document.querySelector(".clase");
document.querySelectorAll("p");
📌 2️⃣ Cambiar contenido
mensaje.textContent = "Nuevo texto";
mensaje.innerHTML = "<strong>Texto en negrita</strong>";
📌 3️⃣ Cambiar estilos
mensaje.style.color = "red";
mensaje.style.fontSize = "20px";

O mejor práctica:

mensaje.classList.add("activo");
mensaje.classList.remove("activo");
mensaje.classList.toggle("activo");
📌 4️⃣ Crear elementos dinámicamente
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Soy dinámico";

document.body.appendChild(nuevoParrafo);
📌 5️⃣ Eliminar elementos
mensaje.remove();
📌 6️⃣ Eventos (lo más importante en el body)
<button id="btn">Haz clic</button>
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
alert("Botón pulsado");
});

Eventos importantes:

click

submit

change

input

keydown

mouseover

focus

blur

📌 7️⃣ Formularios (MUY IMPORTANTE)

<form id="formulario">
  <input type="text" id="nombre">
  <button type="submit">Enviar</button>
</form>
const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {
e.preventDefault();

const nombre = document.getElementById("nombre").value;

if(nombre === ""){
alert("El nombre es obligatorio");
} else {
console.log("Formulario válido");
}
});
📌 8️⃣ Multimedia en el body
<video id="video" src="video.mp4"></video>
<button id="play">Play</button>
const video = document.getElementById("video");
const play = document.getElementById("play");

play.addEventListener("click", () => {
video.play();
});
📌 9️⃣ Manejo de listas

<ul id="lista"></ul>
const lista = document.getElementById("lista");

const datos = ["Ana", "Luis", "Carlos"];

datos.forEach(nombre => {
const li = document.createElement("li");
li.textContent = nombre;
lista.appendChild(li);
});
📌 🔟 Delegación de eventos
lista.addEventListener("click", (e) => {
if(e.target.tagName === "LI"){
console.log("Has hecho clic en", e.target.textContent);
}
});
📌 1️⃣1️⃣ Accesibilidad en el body
btn.setAttribute("aria-label", "Enviar formulario");
btn.focus();
📌 1️⃣2️⃣ Scroll y ventana
window.scrollTo(0, 500);
console.log(window.innerWidth);
📌 1️⃣3️⃣ Temporizadores
setTimeout(() => {
console.log("Hola después de 3 segundos");
}, 3000);

setInterval(() => {
console.log("Cada 2 segundos");
}, 2000);
🎯 RESUMEN PROFESIONAL

Todo lo que lleva <body> se trabaja con:

DOM

Eventos

Formularios

Manipulación de estilos

Creación dinámica

UX y accesibilidad

Multimedia

Scroll

Temporizadores

Si quieres, ahora puedo:

1️⃣ Hacerte ejercicios tipo examen
2️⃣ Hacer un mini proyecto práctico
3️⃣ Simular preguntas oficiales del certificado
4️⃣ Hacer un CRUD completo en el body
5️⃣ Explicarte el DOM a nivel profundo
