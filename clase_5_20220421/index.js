// 1 - Agregar dependencia express:
const express = require("express");

// 2 - Arrancar express:
const app = express();

app.use(express.static("assets"));

// 3 - Agregar la ruta con la plantilla HTML:
app.get("/", function(req, res)
{
    res.sendFile(__dirname + "/index.html");
})

// 5 - Agregar el puerto que usara express:
app.listen(3000);
console.log("Express esta corriendo en el puerto 3000");
console.log("http://localhost:3000");