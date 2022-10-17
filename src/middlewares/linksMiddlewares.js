import { linksSchema } from "../schemas/linksSchemas.js";

async function createLinkMiddleware(req, res, next) {
  const validation = linksSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map((error) => error.message);
    res.status(422).send(errors);
    return;
  }

  next();
}

export { createLinkMiddleware };
