import express from "express";
import {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
  getUserProfile,
  getMyAppointments,
} from "../Controllers/userController.js"; // Ensure this path is correct

import { authenticate, restrict } from "../auth/verifyToken.js";
const router = express.Router();

router.put("/:id", authenticate, restrict(["patient"]), updateUser);
router.delete("/:id", authenticate, restrict(["patient"]), deleteUser);
router.get("/profile/me", authenticate, restrict(["patient"]), getUserProfile);
router.get(
  "/appointments/my-appointments",
  authenticate,
  restrict(["patient"]),
  getMyAppointments
);
router.get("/:id", authenticate, restrict(["patient"]), getSingleUser);
router.get("/", authenticate, restrict(["admin"]), getAllUsers); // Ensure authentication and restriction for getting all users

export default router;
