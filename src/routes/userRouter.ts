import { Router } from "express";
import { userController } from "../controller/userController";


const userRouter = Router();

userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.getById);
userRouter.post('/', userController.createUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.post('/', userController.getByEmail)



export default userRouter;