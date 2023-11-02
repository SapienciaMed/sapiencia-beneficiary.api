import { rules, schema } from "@ioc:Adonis/Core/Validator";

export const socialServicesSchema = schema.create({
    document: schema.string([rules.required(), rules.unsigned()]),
    foundId: schema.number([rules.required(), rules.unsigned()]),
    periodId: schema.number([rules.required(), rules.unsigned()]),
})