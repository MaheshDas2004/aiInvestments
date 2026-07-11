import express from "express";
import register from "../../controllers/auth/register_controller.js";
import login from "../../controllers/auth/login_controller.js";
import authenticate from "../../middleware/auth/middleware.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/me", authenticate, (req, res) => {
	return res.status(200).json({
		success: true,
		message: "Token verified successfully",
		user: req.user,
	});
});

export default router;