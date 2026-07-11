import express from "express";
import { generateResearch } from "../../controllers/research/research_controller.js";
import authenticate from "../../middleware/auth/auth_middleware.js";

const router = express.Router();

router.post("/", authenticate, generateResearch);

export default router;