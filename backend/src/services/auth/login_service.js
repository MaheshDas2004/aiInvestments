import bcrypt from "bcrypt";
import pool from "../../config/db.js";
import generateToken from "../../utils/jwt.js";

const loginUser = async ({ email, password }) => {

    const user = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );

    if (user.rows.length === 0) {
        throw new Error("Invalid email or password");
    }

    const existingUser = user.rows[0];

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
        throw new Error("Invalid email or password");
    }
    const token = generateToken({
        id: existingUser.id,
        email: existingUser.email,
    });

    return {
        token,
        user: {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
        },
    };
};

export default loginUser;