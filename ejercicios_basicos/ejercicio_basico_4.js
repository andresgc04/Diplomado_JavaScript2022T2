/*
Escribe un programa de tres líneas 
que pida un número, pida otro número 
y escriba el resultado de sumar estos dos números.
*/

const { type } = require("os");
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
    let resultado = result.numero1 + result.numero2;
    console.log(
      "Resultado de la suma de los 2 numeros solicitados es: " + resultado
    );
  }
);
