import { DateTime } from "luxon";

export interface IPqrsdfFilters {
  page: number;
  perPage: number;
  identification: string;
  programId?: number;
  filingNumber?: string;
  requestType?: number;
}

export interface IPqrsdf {
  id?: number;
  requestTypeId: number;
  personId?: number;
  responseMediumId: number;
  responsibleId?: number;
  requestSubjectId: number;
  fileId?: number;
  statusId?: number;
  filingNumber?: number;
  idCanalesAttencion?: number;
  clasification: string;
  dependency: string;
  description: string;
  requestType?: IRequestType;
  person?: IPerson;
  answer?: string;
  answerDate?: DateTime;
  responseMedium?: IResponseMedium;
  responsible?: IWorkEntity;
  status?: IPqrsdfStatus;
  requestSubject?: IRequestSubject;
  program?: IProgram;
  file?: IFile;
  createdAt?: string;
  updatedAt?: DateTime;
}
export interface IRequestSubject {
  aso_codigo: number;
  aso_asunto: string;
  aso_activo: boolean;
  aso_orden: number;
}

export interface IRequestType {
  tso_codigo: number;
  tso_description: string;
  tso_activo: boolean;
  tso_orden: number;
}

export interface IPerson {
  id?: number;
  documentTypeId: number;
  documentType?: IGenericData;
  entityTypeId: number;
  entityType?: ILegalEntityType;
  identification: string;
  password: string;
  firstName: string;
  secondName: string;
  firstSurname: string;
  secondSurname: string;
  birthdate: Date;
  firstContactNumber: string;
  SecondContactNumber: string;
  email: string;
  address: string;
  countryId: number;
  departmentId: number;
  municipalityId: number;
  country?: IGenericData;
  department?: IGenericData;
  municipality?: IGenericData;
  isBeneficiary: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface IResponseMedium {
  mre_codigo: number;
  mre_descripcion: string;
  mre_activo: boolean;
  mre_orden: number;
}

export interface IWorkEntity {
  id?: number;
  userId: number;
  workEntityTypeId: number;
  order?: number;
  status?: boolean;
  name: string;
  user?: IUser;
  workEntityType?: IWorkEntityType;
  // pqrsdfs?: IPqrsdf[];
  affairsPrograms?: IEntityAffairsProgram[];
  createdAt?: DateTime;
  updatedAt?: DateTime;
}

export interface IPqrsdfStatus {
  lep_codigo: number;
  lep_estado: string;
  lep_activo: boolean;
  lep_orden: number;
}

export interface IRequestSubjectType {
  aso_codigo?: number;
  aso_asunto: string;
  aso_activo?: boolean;
  aso_orden?: number;
  requestObjectId: number;
  requestObject?: IRequestObject;
  programs?: IProgram[];
  createdAt?: DateTime;
  updatedAt?: DateTime;
}

export interface IFile {
  id?: number;
  name: string;
  isActive: boolean;
}

export interface IGenericData {
  id: number;
  grouper: string;
  itemCode: string;
  itemDescription: string;
  additionalFields?: any;
}

export interface ILegalEntityType {
  tej_codigo: number;
  tej_nombre: string;
  tej_activo: boolean;
  tej_orden: number;
}

export interface IUser {
  id?: number;
  names?: string;
  lastNames?: string;
  gender?: string;
  typeDocument?: string;
  numberDocument?: string;
  email?: string;
  userModify?: string;
  dateModify?: DateTime;
  userCreate?: string;
  dateCreate?: DateTime;
  disabled?: boolean;
  numberContact1?: string;
  numberContact2?: string;
  deparmentCode?: string;
  townCode?: string;
  neighborhood?: string;
  address?: string;
  firstAdmission?: boolean;
  profiles?: IProfile[];
  charge?: number;
  dependency?: number;
}

export interface IWorkEntityType {
  tet_codigo?: number;
  tet_descripcion: string;
  tet_activo: boolean;
  tet_orden: number;
  associatedStatusId?: number;
  dependenceId?: number;
  status?: IPqrsdfStatus;
  dependece?: IDependence;
}

export interface IEntityAffairsProgram {
  id?: number;
  workEntityId?: number;
  affairProgramId?: number;
  createdAt?: DateTime;
  updatedAt?: DateTime;
}

export interface IProfile {
  id?: number;
  userId: number;
  aplicationId: number;
  dateValidity: Date;
  userModify?: string;
  modifyDate?: Date;
  userCreate?: string;
  dateCreate?: DateTime;

  roles?: IRole[];
}

export interface IDependence {
  dep_codigo?: number;
  dep_descripcion?: string;
  dep_activo?: boolean;
  dep_orden?: number;
}
export interface IRole {
  id?: number;
  name: string;
  description: string;
  aplicationId: number;
  userModify?: string;
  dateModify?: Date;
  userCreate?: string;
  dateCreate?: DateTime;

  actions?: IActions[];
}

export interface IActions {
  id: number;
  optionId: number;
  name: string;
  order: number;
  indicator: string;
}

export interface IRequestObject {
  obs_codigo?: number;
  obs_description?: string;
  obs_termino_dias?: number;
  obs_tipo_dias?: string;
  obs_activo?: boolean;
  obs_orden?: number;
}

export interface IProgram {
  prg_codigo?: number;
  prg_descripcion?: string;
  prg_clasificacion?: number;
  prg_dependencia?: number;
  clpClasificacionPrograma?: IProgramClasification[];
  depDependencia?: IDependence;
  affairs?: IAffair[];
  prg_activo?: boolean;
  prg_orden?: number;
}

export interface IProgramClasification {
  clp_codigo?: number;
  clp_descripcion?: string;
  clp_programa?: number;
  clp_activo?: boolean;
  clp_orden?: number;
}

export interface IAffair {
  aso_codigo?: number;
  aso_asunto?: string;
  aso_activo?: boolean;
  aso_orden?: number;
  affairProgramId?: number;
}
export interface IPqrsdfFiltersResponsesPQRSDF {
  page: number;
  perPage: number;
  pqrsdfId: number;
}
