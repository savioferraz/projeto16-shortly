import express from "express";
import * as usersControllers from "../controllers/usersControllers.js";
import { authMiddleware } from "../middlewares/authMiddlewares.js";
import {
  signUpMiddleware,
  signInMiddleware,
} from "../middlewares/usersMiddlewares.js";

const router = express.Router();

router.post("/signup", signUpMiddleware, usersControllers.signUp);
router.post("/signin", signInMiddleware, usersControllers.signIn);
router.get("/users/me", authMiddleware, usersControllers.listUser);
router.get("/ranking", usersControllers.listRank);

export default router;
