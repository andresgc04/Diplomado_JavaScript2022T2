/*Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres:*/

const prompt = require("prompt");

prompt.start();

prompt.get([
  {
    name: "numero1",
    description: "Ingrese el primer numero:",
    type: "number",
    required: true,
  },
  {
    name: "numero2",
    description: "Ingrese el segundo numero:",
    type: "number",
    required: true,
  },
  {
    name: "numero3",
    description: "Ingrese el tercer numero",
    type: "number",
    required: true,
  },
],
function(err, result)
{
    if(result.numero1 > result.numero2 && result.numero1 > result.numero3)
    {
        console.log("El numero mayor es: ", result.numero1);
    }
    else if(result.numero2 > result.numero1 && result.numero2 > result.numero3)
    {
        console.log("El numero mayor es: ", result.numero2);
    }
    else
    {
        console.log("El numero mayor es: ", result.numero3);
    }
}
);
