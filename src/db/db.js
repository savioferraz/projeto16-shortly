import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const connection = new Pool({ onnectionString: process.env.DATABASE_URL });

export { connection };
