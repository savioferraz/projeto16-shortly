import joi from "joi";

const signUpSchema = joi.object({
  email: joi.string().email().required(),
  name: joi.string().alphanum().trim().required(),
  password: joi.string().required(),
  passwordConfirm: joi.ref("password"),
});

const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export { signUpSchema, signInSchema };
