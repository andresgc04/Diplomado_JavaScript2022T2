//console.log("Hola");

//funcion simple:
function saludo()
{
    console.log("Hola, desde una funcion");
}

//funcion con parametros:
function saludos(e){
    //evitar que se refresque la pagina:
    e.preventDefault();
    console.log("Hola, desde una funcion");
}

const miFormulario = document.querySelector("#my-form");
console.log(miFormulario);

miFormulario.addEventListener('submit', saludos);

function saludoConParametros(nombre) {
    console.log("Hola, "+nombre)
}

let nombre = "Andres"
// Llamar una function con parametros
saludoConParametros(nombre)