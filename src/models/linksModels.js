import { connection } from "../db/db.js";

async function createLink(userId, url, shortUrl) {
  const result = await connection.query(
    `INSERT INTO links (user_id, url, short_url) VALUES ($1, $2, $3)`,
    [userId, url, shortUrl]
  );
  return result;
}

async function filterLinks(urlId) {
  const result = await connection.query(
    `SELECT id, short_url AS "shortUrl", url FROM links WHERE id=$1;
    `,
    [urlId]
  );
  return result;
}

export { createLink, filterLinks };
