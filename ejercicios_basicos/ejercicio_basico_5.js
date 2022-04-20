/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor:*/

const prompt = require("prompt");

prompt.start();

prompt.get(
  [
    {
      name: "numero1",
      description: "Ingrese el primer numero",
      type: "number",
      required: true,
    },
    {
      name: "numero2",
      description: "Ingrese el segundo numero",
      type: "number",
      required: true,
    },
  ],
  function (err, result) {
    if (result.numero1 > result.numero2) 
    {
        console.log("El numero mayor es: ", result.numero1);
    }
    else
    {
        console.log("El numero mayor es: ", result.numero2);
    }
  }
);
