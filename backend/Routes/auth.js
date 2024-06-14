import express from "express";
import { register, login } from "../Controllers/authController.js";

const router = express.Router();

router.post("/register", register); // Corrected route
router.post("/login", login);

export default router;
