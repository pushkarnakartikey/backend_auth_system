import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { authRoutes } from "./routes/auth.routes";
import { userRoutes } from "./routes/user.routes";
import { ENDPOINTS } from "./constants/endpoints";

const app: Application = express();

// Global Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Endpoint
app.get(ENDPOINTS.HEALTH, (req: Request, res: Response) => {
  res.status(200).json({ status: "OK", message: "Server is running perfectly." });
});

// API Routes
app.use(ENDPOINTS.AUTH.BASE, authRoutes);
app.use(ENDPOINTS.USERS.BASE, userRoutes);

// 404 Handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "Not Found" });
});

export { app };
