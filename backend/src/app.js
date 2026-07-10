import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "InvestIQ AI Backend Running 🚀",
    });
});

export default app;