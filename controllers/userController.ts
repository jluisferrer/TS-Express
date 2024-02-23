import { Request, Response } from "express"

export const getUser = (req: Request,res: Response) => {
    res.status(200).json({
        succes:true,
        message : "User retrieved successfuly"
    
    })
}

export const postUser = (req: Request,res: Response) => {
    res.status(201).json({
        succes:true,
        message : "User sent successfuly"
    
    })
}

export const putUser = (req: Request,res: Response) => {
    res.status(200).json({
        succes:true,
        message : "User put successfuly"
    
    })
}

export const deleteUser = (req: Request,res: Response) => {
    res.status(200).json({
        succes:true,
        message : "User delete successfuly"
    
    })
}