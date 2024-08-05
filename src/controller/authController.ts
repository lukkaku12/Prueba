import { container } from "tsyringe";
import UserService from "../service/userService";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User } from "../model";




export default class AuthController {
    static async login(req: Request, res:Response) {
        try {
            const { email, password } = req.body
            const userService = container.resolve(UserService);
            const user: User = await userService.checkUserCredentials(email, password);
            const token = AuthController.generateToken({
                id: user.id,
                username: user.email,
              });
            res.status(201).json({
                status:201,
                token:token
            })
        } catch (error:any) {
            throw new Error(error)
        }
    }

    static generateToken = (user: { id: number; username: string }) => {
        const token = jwt.sign(user, "secret", { expiresIn: "1h" });
        return token;
      };
}