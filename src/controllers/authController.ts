import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User";

export const register = async (req: Request, res: Response) => {
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

        //tratamos la data si fuera necesario

        const passwordEncrypted = bcrypt.hashSync(password, 8);
        //comprobamos que se genera la contraseña encriptada
        console.log(passwordEncrypted);



        const newUser = await User.create({
            email: email,
            password: passwordEncrypted,
            role: {                             //es un objeto
            id:1
            }
        }).save()


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