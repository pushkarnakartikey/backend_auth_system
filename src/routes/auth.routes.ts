import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { ENDPOINTS } from "../constants/endpoints";

const router = Router();
const authController = new AuthController();

router.post(ENDPOINTS.AUTH.SIGNUP, authController.signup);
router.post(ENDPOINTS.AUTH.LOGIN, authController.login);

export { router as authRoutes };
