import express from "express";
import register from "../../controllers/auth/register_controller.js";
import login from "../../controllers/auth/login_controller.js";
import authenticate from "../../middleware/auth/auth_middleware.js";
import {validateRegister,validateLogin} from "../../middleware/auth/validate_middleware.js";
const router = express.Router();

router.post("/register",validateRegister, register);
router.post("/login",validateLogin,login);
router.post("/logout", (req, res) => {
  const isProduction = process.env.NODE_ENV === "production";

  res.clearCookie("token", {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  });

  return res.status(200).json({
    success: true,
    message: "Logout successful",
  });
});

router.get("/me", authenticate, (req, res) => {
	return res.status(200).json({
		success: true,
		message: "Token verified successfully",
		user: req.user,
	});
});

export default router;