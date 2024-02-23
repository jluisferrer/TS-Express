import { Request, Response } from "express"

export const getRoles = (req: Request,res: Response) => {
    res.status(200).json({
        succes:true,
        message : "Roles retrieved successfuly"
    
    })
}

export const postRoles = (req: Request,res: Response) => {
    res.status(201).json({
        succes:true,
        message : "Roles sent successfuly"
    
    })
}

export const putRoles = (req: Request,res: Response) => {
    res.status(200).json({
        succes:true,
        message : "Roles put successfuly"
    
    })
}

export const deleteRoles = (req: Request,res: Response) => {
    res.status(200).json({
        succes:true,
        message : "Roles delete successfuly"
    
    })
}