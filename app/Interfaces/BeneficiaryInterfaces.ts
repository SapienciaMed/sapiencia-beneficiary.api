import { IDataPaginateFilters } from "App/Utils/ApiResponses";
import { DateTime } from "luxon";

export interface IBeneficiary {
  document: number;
  fullName: string;
  found: string;
  period: string;
  modality: string;
  creditStatus: string;
  foundID: number;
  page?: number;
  perPage?: number;
}

export interface IBeneficiaryFilter extends IDataPaginateFilters {
  ccBeneficiary?: number;
  founds?: number;
  period?: number;
  modality?: number;
  creditStatus?: number;
}

export interface IPQRSDFFilter extends IDataPaginateFilters {
  PQRSDF?: string;
  Subject?: number;
  Program?: number;
}

export interface IPQRSDF {
  ID: number;
  PQRSDF: string;
  DateFiled: Date;
  Program: string;
  Subject: string;
  Status: string;
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

export interface BeneficiaryInfo {
  Tipo_de_documento: string;
  Nro_de_identificacion: string;
  Nombre: string;
  Lugar_expedicion: string;
  genero: string;
  Fecha_nacimiento: string;
  Edad: string;
  Pais_de_nacimiento: string;
  Dpto_de_nacimiento: string;
  Municipio_de_nacimiento: string;
  Direccion_residencia: string;
  Celular: string;
  Correo: string;
  IES: string;
  Programa_academico: string;
  Tipo_documento_deudor: string;
  Nro_documento_deudor: string;
  Nombre_deudor: string;
  Dpto_resd_deudor: string;
  Mpio_resd_deudor: string;
  Dir_resd_deudor: string;
  Telefono_deudor: string;
  Celular_deudor: string;
  Correo_deudor: string;
  Actividad_economica_deudor: string;
  Empresa_deudor: string;
  Cargo_deudor: string;
  Dir_empresa_deudor: string;
  Tel_empresa_deudor: string;
  Salario_deudor;
}


export interface IBenefitsFilter extends IDataPaginateFilters {
  document: number;
  foundId?: number;
  modalityId?: number;
}

export interface IBenefits {
  id_found: number;
  id_modality: number;
  PeriodCalculateProjection: string;
  ProjectionEnrollment: string;
  ProjectionSustenance: string;
  TotalProjection: string;
  calculatePeriod: number;
  calculatePeriodName: string
  OrderEnrollment: string
  OrderSustenance: string
  OrderTotal: string
  statusCredit: string
  DateOrder: DateTime
}

export interface ISocialServicesFound {
  document: string;
  foundId: number;
  periodId: number
}

export interface ISocialServices {

}
