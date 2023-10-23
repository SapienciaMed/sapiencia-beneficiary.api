import { rules, schema } from "@ioc:Adonis/Core/Validator";

export const filterAttentionsSchema = schema.create({
  page: schema.number([rules.required(), rules.unsigned()]),
  perPage: schema.number([rules.required(), rules.unsigned()]),
  registrationDate: schema.date(),
  program: schema.number(),
});
