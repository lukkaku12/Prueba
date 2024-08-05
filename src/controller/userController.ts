import { Request, Response } from "express";
import { container } from "tsyringe";
import UserService from "../service/userService";

export class userController {
  static async getAll(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const response = await userService.getAllUsers();
      res.status(200).json({
        status: 200,
        result: response,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const response = await userService.getById(parseInt(req.params.id));
      res.status(200).json({
        status: 200,
        response: response,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async getByEmail(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const response = await userService.getByEmail(req.body.email);
      res.status(200).json({
        status: 200,
        response: response,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const reponse = await userService.createUser(req.body);
      res.status(201).json({
        status: 201,
        response: "user created successfully",
        extra: reponse,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const response = await userService.deleteUser(parseInt(req.params.id));
      res.status(204).json({
        status: 204,
        response: `${response} eliminated successfully`,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async authenticateUser(req: Request, res:Response) {
    
  }
}
