import { connection } from "../db/db.js";
import { signUpSchema } from "../schemas/usersSchemas.js";
import joi from "joi";
import bcrypt from "bcrypt";

async function signUpMiddleware(req, res, next) {
  const userData = req.body;

  const sameEmail = await connection.query(
    `SELECT * FROM users WHERE email=$1`,
    [userData.email]
  );

  const validation = signUpSchema.validate(userData, { abortEarly: false });

  if (sameEmail.rows.length > 0) {
    res.status(409).send("Email already in use");
    return;
  }

  if (validation.error) {
    const errors = validation.error.details.map((error) => error.message);
    res.status(422).send(errors);
    return;
  }

  next();
}

async function signInMiddleware(req, res, next) {
  const { email, password } = req.body;

  const user = await connection.query(`SELECT * FROM users WHERE email=$1`, [
    email,
  ]);

  if (user.rows[0]) {
    const passDecrypt = bcrypt.compareSync(password, user.rows[0].password);

    if (passDecrypt) {
      res.locals.user = user.rows[0];
      next();
    } else {
      res.status(409).send("Invalid email or password");
      return;
    }
  } else {
    res.status(409).send("Invalid email or password");
    return;
  }
}

export { signUpMiddleware, signInMiddleware };
