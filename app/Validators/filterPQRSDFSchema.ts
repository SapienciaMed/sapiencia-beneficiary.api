import { rules, schema } from "@ioc:Adonis/Core/Validator";

export const filterPQRSDFSchema = schema.create({
    page: schema.number([rules.required(), rules.unsigned()]),
    perPage: schema.number([rules.required(), rules.unsigned()]),
    identification: schema.string(),
    programId: schema.number.optional(),
    filingNumber: schema.string.optional(),
    requestType: schema.number.optional(),
})