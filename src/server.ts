import express from "express"; //Importamos libreria express

const app = express(); // Creamos una constante con la metodo express

app.listen(4000, () => {     //llamamos al metodo en el puerto 4000 
    console.log("Server is running");
})  