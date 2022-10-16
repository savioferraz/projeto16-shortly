import { connection } from "../db/db.js";
import jwt from "jsonwebtoken";

async function authMiddleware(req, res, next) {
  let token = req.headers?.authorization;
  token = token.replace("Bearer ", "");

  try {
    const verifyToken = jwt.verify(token, "token_key");
  } catch (error) {
    connection.query(`DELETE FROM sessions WHERE token=$1;`, [token]);
    res.status(401).send(error.message);
  }

  const isActive = await connection.query(
    `SELECT * FROM sessions WHERE user_id=$1 AND active=TRUE;`,
    [verifyToken.userId]
  );

  if (isActive.rows.length === 0) {
    res.status(401).send("unauthorized");
  }

  res.locals.userId = verifyToken.userId;

  next();
}

export { authMiddleware };
