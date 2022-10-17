import * as usersModels from "../models/usersModels.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

async function authMiddleware(req, res, next) {
  try {
    let token = req.headers?.authorization;
    token = token.replace("Bearer ", "");

    const verifyToken = jwt.verify(token, process.env.TOKEN_SECRET);

    const isActive = await usersModels.getToken(verifyToken.userId);

    if (isActive.rows.length === 0) {
      res.status(401).send("Unauthorized");
    }
    res.locals.userId = verifyToken.userId;

    next();
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
}

export { authMiddleware };
