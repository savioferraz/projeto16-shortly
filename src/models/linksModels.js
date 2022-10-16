import { connection } from "../db/db.js";

async function createLink(userId, url, shortUrl) {
  const result = await connection.query(
    `
  INSERT INTO links (user_id, url, short_url) 
  VALUES ($1, $2, $3)`,
    [userId, url, shortUrl]
  );
  return result;
}

async function filterLinks(urlId) {
  const result = await connection.query(
    `
    SELECT id, short_url AS "shortUrl", url 
    FROM links 
    WHERE id=$1;
    `,
    [urlId]
  );
  return result;
}

async function redirectLink(shortUrl) {
  const result = await connection.query(
    `UPDATE links 
    SET visit_count=visit_count+1 WHERE short_url=$1 
    RETURNING *;`,
    [shortUrl]
  );
  return result;
}

async function deleteLink(urlId, userId) {
  const result = await connection.query(
    `
    DELETE FROM links 
    WHERE id=$1 AND user_id=$2`,
    [urlId, userId]
  );
  return result;
}

export { createLink, filterLinks, deleteLink, redirectLink };
