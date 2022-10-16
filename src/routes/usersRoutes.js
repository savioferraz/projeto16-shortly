import express from "express";
import * as usersControllers from "../controllers/usersControllers.js";
import {
  signUpMiddleware,
  signInMiddleware,
} from "../middlewares/usersMiddlewares.js";

const router = express.Router();

router.post("/signup", signUpMiddleware, usersControllers.signUp);
router.post("/signin", signInMiddleware, usersControllers.signIn);

export default router;
