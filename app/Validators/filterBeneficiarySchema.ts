import { rules, schema } from "@ioc:Adonis/Core/Validator";

export const filtersBeneficiarySchema = schema.create({
  page: schema.number([rules.required(), rules.unsigned()]),
  perPage: schema.number([rules.required(), rules.unsigned()]),
  ccBeneficiary: schema.number.optional([rules.unsigned()]),
  founds: schema.number.optional([rules.unsigned()]),
  period: schema.number.optional([rules.unsigned()]),
  modality: schema.number.optional([rules.unsigned()]),
  creditStatus: schema.number.optional([rules.unsigned()]),
});
