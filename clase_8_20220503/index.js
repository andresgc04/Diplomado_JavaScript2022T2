// 1 - Agregar dependencia express:
const express = require("express");

// 2 - Arrancar express:
const app = express();

// 3 - Exponer carpeta assets para poder utilizar los archivos css y js:
app.use(express.static("assets"));

// 4 - Agregar las rutas con las plantillas HTML:
app.get("/", function(req, res)
{
    res.sendFile(__dirname + "/resume.html");
});

// 5 - Agregar el puerto que usara express:
app.listen(3000);
console.log("Express esta corriendo en el puerto 3000");
console.log("http://localhost:3000");