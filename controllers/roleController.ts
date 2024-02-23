import { Request, Response } from "express"

export const getRoles = (req: Request,res: Response) => {
    res.status(200).json({
        succes:true,
        message : "Roles retrieved successfuly"
    
    })
}