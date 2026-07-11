import loginUser from "../../services/auth/login_service.js";

const login = async (req, res) => {
    try {
        const data = await loginUser(req.body);

        return res.status(200).json({
            success: true,
            message: "Login Successful",
            data,
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