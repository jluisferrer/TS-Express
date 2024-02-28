import { Request, Response } from "express";

export const register = (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const email = req.body.email;
        const password = req.body.password;

        // const {email, password } = req.body

        if (password.length < 6 || password.length > 10) {
            return res.status(4000).json({
                succes: false,
                message: "Eres tonto la contraseña debe estar entre 6 y 10 caracteres"
            })
        }

        //Validacion email

        const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email) ){
          return res.status(400).json(
            {
              success: false,
              message: "format email invalid"
            }
          )
        }


        res.status(201).json({
            success: true,
            message: "User registered successfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cannot be registered",
            error: error
        })

    }

}