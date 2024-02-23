import express from "express"; //Importamos libreria express
import dotenv from "dotenv";

dotenv.config();

const app = express(); // Creamos una constante con la metodo express

const PORT = process.env.PORT || 4001; // 

app.get('/healthy', (req , res) => {            /// Get recibe la url /healthy          
    res.status(200).json({
        succes:true,
        message : "Server is healthy"
    
    })
})

app.listen(PORT, () => {     //llamamos al metodo en el puerto 4000 
    console.log(`Server is running on port: ${PORT}`);
})  