// viviana-backend/config/db.js
const mysql = require("mysql2/promise"); // ✅ use promise version
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

db.getConnection()
  .then(() => {
    console.log("✅ Connected to MySQL database.");
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err.stack);
  });

module.exports = db;
