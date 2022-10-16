import { connection } from "../db/db.js";

async function createLink(userId, url, shortUrl) {
  const result = await connection.query(
    `INSERT INTO links (user_id, url, short_url) VALUES ($1, $2, $3)`,
    [userId, url, shortUrl]
  );
  return result;
}

export { createLink };
