import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import usersRoutes from "./routes/usersRoutes.js";
import linksRoutes from "./routes/linksRoutes.js";

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());

server.use(usersRoutes);
server.use(linksRoutes);

server.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
