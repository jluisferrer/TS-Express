import express from "express"; //Importamos libreria express
import dotenv from "dotenv";

dotenv.config();

const app = express(); // Creamos una constante con la metodo express

const PORT = process.env.PORT || 4001; // 

app.listen(PORT, () => {     //llamamos al metodo en el puerto 4000 
    console.log(`Server is running on port: ${PORT}`);
})  