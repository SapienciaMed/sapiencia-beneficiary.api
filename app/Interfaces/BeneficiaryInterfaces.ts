import { IDataPaginateFilters } from "App/Utils/ApiResponses";
import { DateTime } from "luxon";

export interface IBeneficiary {
  document: number;
  fullName: string;
  found: string;
  period: string;
  modality: string;
  creditStatus: string;
}

export interface IBeneficiaryFilter extends IDataPaginateFilters {
  ccBeneficiary?: number;
  founds?: number;
  period?: number;
  modality?: number;
  creditStatus?: number;
}

export interface IPQRSDFFilter extends IDataPaginateFilters{
  PQRSDF?:string,
  Subject? : number,
  Program?: number,
}

export interface IPQRSDF{
  ID:number,
  PQRSDF:string,
  DateFiled: Date,
  Program: string,
  Subject : string,
  Status : string
}

export interface IAttentions {
  ID: number;
  registrationDate: DateTime;
  Typeofrequest: string;
  dependence: string;
  program: string;
  ApplicationTopic: string;
}

export interface IAttentionsFilter extends IDataPaginateFilters {
    registrationDate: DateTime;
    program: number;
}

