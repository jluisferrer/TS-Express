import express from "express"; //Importamos libreria express
import dotenv from "dotenv";
import { getRoles, postRoles, putRoles, deleteRoles,} from "../controllers/roleController";
import { getUser, postUser, putUser, deleteUser,} from "../controllers/userController";

dotenv.config();

const app = express(); // Creamos una constante con la metodo express

app.use(express.json());

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
app.put ("/roles/:id", putRoles)
app.delete("/roles/:id", deleteRoles)

//user routes
app.get('/user', getUser)
app.post("/user", postUser)
app.put ("/user/:id", putUser)
app.delete("/user/:id", deleteUser)

app.listen(PORT, () => {     //llamamos al metodo en el puerto 4000 
    console.log(`Server is running on port: ${PORT}`);
})  