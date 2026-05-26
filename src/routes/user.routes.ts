import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { ENDPOINTS } from "../constants/endpoints";

const router = Router();
const userController = new UserController();

router.get(ENDPOINTS.USERS.PROFILE, userController.getProfile);

export { router as userRoutes };
