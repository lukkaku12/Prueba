import { Router } from "express";
import AuthController from "../controller/authController";


const authRouter = Router();

authRouter.post('/', AuthController.login)

export default authRouter;