
export interface IPqrsdfFilters {
  page: number;
  perPage: number;
  identification: string;
  programId?: number;
  filingNumber?: string;
  requestType?: number;
}

export interface IPqrsdf {
  createdAt: string
}



