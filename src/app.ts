

import express from "express"; //Importamos libreria express

import { getRoles, postRoles, putRoles, deleteRoles, } from "./controllers/roleController";
import { getUser, postUser, putUser, deleteUser, } from "./controllers/userController";
import { register } from "./controllers/authController";



export const app = express(); // Creamos una constante con la metodo express

app.use(express.json()); // parseamos todo el contenido a JSON



app.get('/healthy', (req, res) => {            /// Get recibe la url /healthy, esta funcion no la llevamos a un controlador y la exportamos debajo   
    res.status(200).json({
        succes: true,
        message: "Server is healthy"

    })
})

// Creamos rutas y llamamos a los controladores
//roles routes
app.get('/roles', getRoles)
app.post("/roles", postRoles)
app.put("/roles/:id", putRoles)
app.delete("/roles/:id", deleteRoles)

//user routes
app.get('/user', getUser)
app.post("/user", postUser)
app.put("/user/:id", putUser)
app.delete("/user/:id", deleteUser)

//AUTH roles
app.post('/api/register', register)