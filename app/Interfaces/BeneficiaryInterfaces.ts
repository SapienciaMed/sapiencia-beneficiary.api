export interface IBeneficiary {
  id: number;
  typeDocument: string;
  document: number;
  fullName: string;
  found: number;
  period: number;
  modality: number;
  creditStatus: number;
}




export interface IBeneficiaryFilter {
    page: number,
    perPage: number,
    document?: string,
    foundId?: number
    callPeriodId?: number
    modalityId?: number
    creditStatusId?: number
  }
  