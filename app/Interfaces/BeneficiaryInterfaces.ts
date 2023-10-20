import { IDataPaginateFilters } from "App/Utils/ApiResponses";

export interface IBeneficiary {
  typeDocument: string;
  document: number;
  fullName: string;
  found: string;
  period: string;
  modality: string;
  creditStatus: string;
}




export interface IBeneficiaryFilter extends IDataPaginateFilters{
    ccBeneficiary?: number,
    founds?: number
    period?: number
    modality?: number
    creditStatus?: number
  }
  