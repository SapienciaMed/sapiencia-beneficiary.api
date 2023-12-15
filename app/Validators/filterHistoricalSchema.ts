import { rules, schema } from "@ioc:Adonis/Core/Validator";

export const filtersHistoricalSchema = schema.create({
    page: schema.number([rules.required(), rules.unsigned()]),
    perPage: schema.number([rules.required(), rules.unsigned()]),
    LegalizationPeriod: schema.string([rules.unsigned()]),
    Status: schema.string([rules.unsigned()]),
    programId: schema.number([rules.unsigned()]),
    periodId: schema.number([rules.unsigned()]),
    modalityID: schema.number([rules.unsigned()]),
    NumberofSpecialSuspensions: schema.number([rules.unsigned()]),
    NumberofTemporarySuspensions: schema.number([rules.unsigned()]),
});