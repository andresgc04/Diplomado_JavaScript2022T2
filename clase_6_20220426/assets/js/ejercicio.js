//Variables:
const px = "px";
//Accion para obtener el formulario:
const miFormulario = document.querySelector("#my-form");

function eventoSubmit(e)
{
    //Quitar comportamiento por defecto del evento:
    e.preventDefault();

    //Desde aqui va mi logica para el evento:

    //Obtener los inputs del formulario:
    const inputs = e.target.elements;

    //Obtener los valores de los inputs:
    const ancho = inputs["ancho"].value;
    const altura = inputs["altura"].value;
    const contenido = inputs["contenido"].value;

    //Cambiar el texto de la caja:
    const elementoCaja = document.querySelector("#caja");
    elementoCaja.textContent = contenido;

    //Cambiar el ancho de la caja:
    elementoCaja.style.width = ancho + px;

    //Cambiar la altura de la caja:
    elementoCaja.style.height = altura + px;
}

miFormulario.addEventListener('submit', eventoSubmit);