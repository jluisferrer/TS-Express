import { Request, Response } from "express"

export const getRoles = (req: Request, res: Response) => {
    res.status(200).json({
        succes: true,
        message: "Roles retrieved successfuly"

    })
}

export const postRoles = (req: Request, res: Response) => {

    const { name, email } = req.body;

    //recuperar la info a traves del body

    console.log(name, email);

    res.status(201).json({
        succes: true,
        message: "Role created"

    })
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