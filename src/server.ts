import express from "express"; //Importamos libreria express
import dotenv from "dotenv";
import { getRoles, postRoles, putRoles, deleteRoles,} from "../controllers/roleController";
import { getUser, postUser, putUser, deleteUser,} from "../controllers/userController";

dotenv.config();

const app = express(); // Creamos una constante con la metodo express

const PORT = process.env.PORT || 4001; // 

app.get('/healthy', (req , res) => {            /// Get recibe la url /healthy          
    res.status(200).json({
        succes:true,
        message : "Server is healthy"
    
    })
})

//roles routes
app.get('/roles', getRoles)
app.post("/roles", postRoles)
app.put ("/roles", putRoles)
app.delete("/roles", deleteRoles)

//user routes
app.get('/user', getUser)
app.post("/user", postUser)
app.put ("/user", putUser)
app.delete("/user", deleteUser)

app.listen(PORT, () => {     //llamamos al metodo en el puerto 4000 
    console.log(`Server is running on port: ${PORT}`);
})  