import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

// const databaseConfig = {
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// };

const databaseConfig = {
  user: "postgres",
  password: "1234",
  host: "localhost",
  port: 5432,
  database: "shortly",
};

const connection = new Pool(databaseConfig);

export { connection };
