import express from "express";
import * as linksControllers from "../controllers/linksControllers.js";
import {} from "../middlewares/linksMiddlewares.js";
import { authMiddleware } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.post("/urls/shorten", authMiddleware, linksControllers.createLink);
router.get("/urls/:id", linksControllers.filterLinks);
// router.get("/urls/open/:shortUrl", linksControllers.signIn);
router.delete("/urls/:id", authMiddleware, linksControllers.deleteLink);

export default router;
