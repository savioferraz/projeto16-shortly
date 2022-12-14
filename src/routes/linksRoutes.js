import express from "express";
import * as linksControllers from "../controllers/linksControllers.js";
import { createLinkMiddleware } from "../middlewares/linksMiddlewares.js";
import { authMiddleware } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.post(
  "/urls/shorten",
  authMiddleware,
  createLinkMiddleware,
  linksControllers.createLink
);
router.get("/urls/:id", linksControllers.filterLinks);
router.get("/urls/open/:shortUrl", linksControllers.redirectLink);
router.delete("/urls/:id", authMiddleware, linksControllers.deleteLink);

export default router;
