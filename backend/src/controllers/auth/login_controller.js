import loginUser from "../../services/auth/login_service.js";

const login = async (req, res) => {
    try {
        const { token, user } = await loginUser(req.body);

        const isProduction = process.env.NODE_ENV === "production";

        res.cookie("token", token, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? "none" : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            success: true,
            message: "Login Successful",
            data: {
                user,
            },
        });
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Login Failed",
            error: err.message,
        });
    }
};

export default login;