import { Router } from "express";
import {
  loginUser,
  registerUser,
  getAllUsers,
} from "../controllers/user-controller.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/", getAllUsers);

export default router;
