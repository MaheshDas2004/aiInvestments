import express from "express";
import register from "../../controllers/auth/register_controller.js";
import login from "../../controllers/auth/login_controller.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;