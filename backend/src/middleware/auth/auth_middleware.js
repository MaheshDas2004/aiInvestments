import { verifyToken } from "../../utils/jwt.js";

const authenticate = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Access denied. No token provided.",
            });
        }

        const decoded = verifyToken(token);

        req.user = decoded;

        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};

export default authenticate;