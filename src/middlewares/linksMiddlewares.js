import { connection } from "../db/db.js";
import { linksSchema } from "../schemas/linksSchemas.js";

async function createLinkMiddleware(req, res, next) {
  const url = req.body.url;

  const validation = linksSchema.validate(url, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map((error) => error.message);
    res.status(422).send(errors);
    return;
  }

  next();
}
