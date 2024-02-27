import { Request, Response } from "express"
import { Role } from "../models/Role";

export const getRoles = (req: Request, res: Response) => {
    res.status(200).json({
        succes: true,
        message: "Roles retrieved successfuly"

    })
}

export const postRoles = async(req: Request, res: Response) => {
try {
    


    //recuperar la info a traves del body

    console.log(req.body);
    const name = req.body.name;


    if (name.length > 50) {
        return res.status(400).json({
            succes: false,
            message: "Role name must be under 50 characters"
      }
        ) }
    
        const newRole = await Role.create({
            name: name
        }).save()

    res.status(201).json({
        succes: true,
        message: "Role created",
        data: newRole

    })
} catch (error) {
    res.status(500).json({
    success:false,
    message:"can't create rol",
    error:error
    })
}
}

export const putRoles = (req: Request, res: Response) => {
    //recuperar parametros de la ruta
    req.params.id
    console.log(req.params.id)

    res.status(200).json({
        succes: true,
        message: "Role updated"

    })
}

export const deleteRoles = (req: Request, res: Response) => {

    //recuperamos parametros de la ruta

    req.params.id
    console.log(req.params.id)

    res.status(200).json({
        succes: true,
        message: "Role delete successfuly"

    })
}