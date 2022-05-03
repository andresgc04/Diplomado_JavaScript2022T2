//console.log("Hola");

//funcion simple:
function saludo()
{
    console.log("Hola, desde una funcion");
}

//funcion con parametros:
function saludos(e){
    e.preventDefault();
    console.log("Hola, desde una funcion")
}

const miFormulario = document.querySelector("#my-form");
console.log(miFormulario);

miFormulario.addEventListener('submit', saludos);