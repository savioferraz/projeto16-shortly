import * as usersModels from "../models/usersModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    const user = res.locals.user;

    const token = jwt.sign(
      {
        userId: user.id,
      },
      "token_key",
      {
        expiresIn: 1800,
      }
    );

    await usersModels.login(user.id, token);

    res.status(200).send("Loged in");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const listUser = async (req, res) => {
  try {
    const userId = res.locals.userId;

    const result = await usersModels.listUser(userId);

    res.status(200).send(result.rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const listRank = async (req, res) => {
  try {
    const result = await usersModels.listRank();

    res.status(200).send(result.rows);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export { signUp, signIn, listUser, listRank };
