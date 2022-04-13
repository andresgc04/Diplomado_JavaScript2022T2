//Para crear variables se puede utilizar las
//palabras reservadas let y var.

//La palabra reservada Let proteje de que no se creen 2 variables con el mismo nombre dentro del mismo scope/alcance:
//let nombre;
//let nombre;

let miVariable;
let $miVariable;
//Notas que js distingue de mayusculas y minusculas:
let mi_variable;
let mivariable1;
let miVariable1;

console.log($miVariable);

$miVariable = "S";

console.log($miVariable);

// La palabra reservada var creará la variable siempre que se le indique
// sin importa si ya fue creada con ese mismo nombre
// var nombre = 'Julio J. Capellán';
// var nombre = 'Julio José Capellán';

var nombre = "Andres E. Guerrero Cordero";
var nombre = "Andres Eugenio Guerrero Cordero";

console.log(nombre);