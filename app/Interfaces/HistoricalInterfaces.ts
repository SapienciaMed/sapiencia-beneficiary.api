import { IDataPaginateFilters } from "App/Utils/ApiResponses";

export interface IHistoricalFilter extends IDataPaginateFilters {
    LegalizationPeriod: string,
    Status: string,
    periodId: number,
    programId: number,
    modalityID: number,
    NumberofSpecialSuspensions: number,
    NumberofTemporarySuspensions: number
}