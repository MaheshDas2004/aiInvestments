import bcrypt from "bcrypt";
import pool from "../../config/db.js";

const registerUser = async ({ name, email, password }) => {
    const existinguser= await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]);

    if (existinguser.rows.length > 0) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
        "INSERT INTO users (name,email, password) VALUES ($1, $2,$3) RETURNING id,name,email,created_at",
        [name,email, hashedPassword]
    );

    return newUser.rows[0];
};

export default registerUser;

    
