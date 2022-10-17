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
      users.id, users.name, COALESCE(SUM(links.visit_count),0) as "visitCount", 
      json_agg(json_build_object('id', links.id, 'shortUrl', links.short_url, 'url', links.url, 'visitCount', links.visit_count)) as "shortenedUrls" 
    FROM users 
    LEFT JOIN links ON users.id = links.user_id
    WHERE users.id=$1
    GROUP BY users.id;`,
    [userId]
  );
  return result;
}

async function listRank() {
  const result = await connection.query(
    `
    SELECT users.id, users.name, COUNT(links.user_id) AS "linksCount", COALESCE(SUM(links.visit_count),0) AS "visitCount"
    FROM users
    LEFT JOIN links ON users.id=links.user_id
    GROUP BY users.id
    ORDER BY "visitCount" DESC, "linksCount" DESC
    LIMIT 10;
    `
  );
  return result;
}

export { signUp, login, listUser, listRank };
