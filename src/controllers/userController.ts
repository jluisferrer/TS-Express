import { Request, Response } from "express"

export const getUser = (req: Request,res: Response) => {
    res.status(200).json({
        succes:true,
        message : "User retrieved successfuly"
    
    })
}

export const postUser = (req: Request,res: Response) => {
    //recuperar la info a traves del body
    console.log(req.body);

    res.status(201).json({
        succes:true,
        message : "User sent successfuly"
    
    })
}

export const putUser = (req: Request,res: Response) => {
    //recuperar parametros de la ruta
    req.body
    req.params.id
    console.log(req.params.id)

    res.status(200).json({
        succes:true,
        message : "User put successfuly"
    
    })
}

export const deleteUser = (req: Request,res: Response) => {
    req.params.id
    console.log(req.params.id)
    res.status(200).json({
        succes:true,
        message : "User delete successfuly"
    
    })
}