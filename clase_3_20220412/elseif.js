/* Condicionales: If, If Else y Switch*/

/*Operadores Aritmeticos usados: 
> Mayor que
< Menor que
>= Mayor o igual que
<= Menor o igual que
*/

let numero = 5;

if(numero > 10)
{
    console.log("Condicion cumplida")
    console.log("Terminar programa");
    console.log("Adios");
}
else
{
    console.log("Es imposible que el numero: "+numero+" sea mayor que 10");
}

/*
Operadores Logicos usados:

&& (And)
|| (Or)
*/

let edad = 7;

if(edad >= 1 && edad <= 6)
{
    console.log("Es un bebe");
}
else if(edad => 7 && edad <= 15)
{
    console.log("Es un pre-adolescente");
}
else
{
    console.log("No hubo coincidencia");
}