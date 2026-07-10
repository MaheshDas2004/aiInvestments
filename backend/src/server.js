import app from "./app.js";
import pool from "./config/db.js";

const PORT = process.env.PORT || 5000;

async function startServer() {
    try {
        // Test database connection
        const client = await pool.connect();
        console.log("PostgreSQL Connected Successfully");
        client.release();

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("Database Connection Failed");
        console.error(error.message);
    }
}

startServer();
