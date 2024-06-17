import express from "express";
import {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
} from "../Controllers/userController.js"; // Ensure this path is correct

import { authenticate, restrict } from "../auth/verifyToken.js";
const router = express.Router();

router.put("/:id", restrict(["patient"]), updateUser);
router.delete("/:id", restrict(["patient"]), deleteUser);
router.get("/:id", authenticate, restrict(["patient"]), getSingleUser);
router.get("/", authenticate, restrict(["admin"]), getAllUsers); // Ensure authentication and restriction for getting all users

export default router;
