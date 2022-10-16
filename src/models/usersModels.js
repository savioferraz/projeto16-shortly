import { connection } from "../db/db.js";

async function signUp(email, name, passwordHash) {
  const result = await connection.query(
    `
    INSERT INTO users (email, name, password) 
    VALUES ($1, $2, $3)`,
    [email, name, passwordHash]
  );
  return result;
}

async function login(userId, token) {
  const result = await connection.query(
    `
    INSERT INTO sessions (user_id, token) 
    VALUES ($1, $2)`,
    [userId, token]
  );
  return result;
}

async function listUser(userId) {
  const result = await connection.query(
    `
    SELECT 
      users.id, users.name, links.id as "linkId", links.short_url as "shortUrl", links.url, links.visit_count as "visitCount" 
    FROM users 
    JOIN links ON users.id = links.user_id
    WHERE users.id=$1; `,
    [userId]
  );
  return result;
}

export { signUp, login, listUser };
