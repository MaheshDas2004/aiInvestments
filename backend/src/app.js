import express from 'express';
import  authRoutes from './routes/auth/auth_routes.js'
import researchRoutes from './routes/research/research_routes.js'
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "InvestIQ AI Backend Running 🚀",
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/research", researchRoutes);
export default app;