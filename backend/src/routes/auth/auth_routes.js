import express from "express";
import register from "../../controllers/auth/register_controller.js";
import login from "../../controllers/auth/login_controller.js";
import authenticate from "../../middleware/auth/auth_middleware.js";
import {validateRegister,validateLogin} from "../../middleware/auth/validate_middleware.js";
const router = express.Router();

router.post("/register",validateRegister, register);
router.post("/login",validateLogin,login);

router.get("/me", authenticate, (req, res) => {
	return res.status(200).json({
		success: true,
		message: "Token verified successfully",
		user: req.user,
	});
});

export default router;