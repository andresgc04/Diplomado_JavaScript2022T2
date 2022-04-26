/*Ciclos son secuencias repetitivas*/

/*Ciclo For:
  for([expresionIncial]; [expresionCondicional]; [expresionDeActualizacion])
  {
      instrucción
  }
*/

let stop = 10;

/*
for(let i=1; i < stop; i=i+1)
{
    console.log("Contemos: "+i);
}
*/

const prompt = require("prompt");

prompt.start();

prompt.get(["stop"], function(error, resultado)
{
    let userStop =+resultado.stop;
    console.log("El usuario quiere contar hasta: " + userStop);

    for(let i = 1; i<=userStop; i=i + 1)
    {
        console.log("Contemos: " + i);
    }
})
