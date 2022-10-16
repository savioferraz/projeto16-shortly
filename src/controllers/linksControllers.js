import * as linksModels from "../models/linksModels.js";
import { nanoid } from "nanoid";

const createLink = async (req, res) => {
  try {
    const userId = res.locals.userId;

    const url = req.body.url;

    const shortUrl = nanoid();

    await linksModels.createLink(userId, url, shortUrl);
    res.status(201).send("Link created");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { createLink };
