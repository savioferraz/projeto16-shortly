import * as linksModels from "../models/linksModels.js";
import { nanoid } from "nanoid";

const createLink = async (req, res) => {
  try {
    const userId = res.locals.userId;

    const url = req.body.url;

    const shortUrl = nanoid();

    await linksModels.createLink(userId, url, shortUrl);

    res.status(201).send(shortUrl);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const filterLinks = async (req, res) => {
  try {
    const urlId = parseInt(req.params.id);

    const result = await linksModels.filterLinks(urlId);

    if (result.rows.length === 0) {
      res.status(404).send("Invalid url id");
    }

    res.status(200).send(result.rows[0]);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const redirectLink = async (req, res) => {
  try {
    const shortUrl = req.params.shortUrl;

    const result = await linksModels.redirectLink(shortUrl);

    res.redirect(302, result.rows[0].url);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteLink = async (req, res) => {
  try {
    const userId = res.locals.userId;

    const urlId = req.params.id;

    await linksModels.deleteLink(urlId, userId);

    res.status(204).send("Url deleted");
  } catch (error) {
    console.log("caiu aqui");
    res.status(400).send(error.message);
  }
};

export { createLink, filterLinks, deleteLink, redirectLink };
