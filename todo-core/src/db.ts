import mysql, { Pool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool: Pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.getConnection()
  .then(connection => {
    console.log('Database connected');
    connection.release(); 
  })
  .catch(error => {
    console.error('Error connecting to database:', error);
    process.exit(1); 
  });

export default pool;
