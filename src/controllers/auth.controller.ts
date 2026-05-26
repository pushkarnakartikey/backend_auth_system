import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
  private authService = new AuthService();

  signup = async (req: Request, res: Response) => {
    try {
      // Setup payload extraction and validation here
      res.status(201).json({ message: "Signup successful" });
    } catch (error) {
      res.status(400).json({ error: "Signup failed" });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      res.status(400).json({ error: "Login failed" });
    }
  };
}
