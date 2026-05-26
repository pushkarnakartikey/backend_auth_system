import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  private userService = new UserService();

  getProfile = async (req: Request, res: Response) => {
    try {
      res.status(200).json({ message: "User profile" });
    } catch (error) {
      res.status(400).json({ error: "Failed to fetch profile" });
    }
  };
}
