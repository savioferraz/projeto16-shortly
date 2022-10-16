import { connection } from "../db/db.js";

async function signUp(email, name, passwordHash) {
  const result = await connection.query(
    `INSERT INTO users (email, name, password) VALUES ($1, $2, $3)`,
    [email, name, passwordHash]
  );
  return result;
}

async function login(email, token) {
  const result = await connection.query(`INSERT INTO sessions `, [
    email,
    token,
  ]);
  return result;
}

export { signUp, login };
