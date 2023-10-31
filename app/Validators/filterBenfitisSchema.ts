import { rules, schema } from "@ioc:Adonis/Core/Validator";

export const filterBenfitsSchema = schema.create({
    page: schema.number([rules.required(), rules.unsigned()]),
    perPage: schema.number([rules.required(), rules.unsigned()]),
    document: schema.number(),
    foundID: schema.number(),
})