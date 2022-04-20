/*Escribir un programa que nos diga si un número dado es primo 
(no es divisible por ninguno otro número que no sea él mismo o la unidad).*/

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
        var i = 2;
        while(result.numero1 % i !==0 && i< result.numero1 / 2)
        {
            i++;
        }
        if (result.numero1 % i !== 0)
        {
            console.log("El numero", result.numero1, "Es primo");
        }
        else
        {
            console.log("El numero",result.numero1, "No es primo");
        }
    }
    )