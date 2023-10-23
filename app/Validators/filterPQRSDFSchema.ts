import { rules, schema } from "@ioc:Adonis/Core/Validator";

export const filterPQRSDFSchema = schema.create({
    page: schema.number([rules.required(), rules.unsigned()]),
    perPage: schema.number([rules.required(), rules.unsigned()]),
    PQRSDF: schema.string(),
    Subject :schema.number(),
    Program: schema.number(),
})