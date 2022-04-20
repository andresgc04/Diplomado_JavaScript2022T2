/*Escribe un programa que pida un número y diga si es divisible por 2: */

const prompt = require("prompt");

prompt.start();

prompt.get(
    [
        {
            name:"numero1",
            description:"Porfavor ingrese un numero",
            type:"number",
            required:true
        }
    ],
    function(err, result)
    {
        if(result.numero1 % 2 === 0)
        {
            console.log("El numero ",result.numero1," es divisible por 2");
        }
        else
        {
            console.log("El numero ",result.numero1," no es divisible por 2");
        }
    }
    )