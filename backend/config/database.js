const { Pool } = require("pg");
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password:process.env.DB_PASSWORD,
  port: 5432,
});

pool.connect((err, client, release) => {
    if (err) {
      console.error("Error connecting to the database:", err.stack);
    } else {
      console.log("Database connected successfully!");
    }
    release();
  });

module.exports = pool;
