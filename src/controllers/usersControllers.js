import { connection } from "../db/db.js";
import * as usersModels from "../models/usersModels.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

const signUp = async (req, res) => {
  try {
    const { email, name } = req.body;
    const passwordHash = bcrypt.hashSync(req.body.password, 10);

    await usersModels.signUp(email, name, passwordHash);

    res.status(201).send("User created");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const signIn = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await connection.query(`SELECT * FROM users WHERE email=$1`, [
      email,
    ]);

    res.status(201).send("Loged in");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { signUp, signIn };
