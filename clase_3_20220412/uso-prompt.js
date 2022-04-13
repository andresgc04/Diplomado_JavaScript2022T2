/*
Incluimos la dependencia prompt, tiene que 
instalarla con el comando npm install prompt
*/

const prompt = require("prompt");

/*
Arrancar el prompt:
*/
prompt.start();

/*
Con est instruccion podremos obtener los valores
que digite el usuario:
*/

prompt.get(['userName', 'email'], function(err, result){
    console.log("Command-line input received:");
    console.log("userName: " + result.userName);
    console.log("Email: " +result.email);
});