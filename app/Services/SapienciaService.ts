import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import { ICallCreditStatus } from "App/Interfaces/CallCreditStatusInterfaces";
import { ICallFound } from "App/Interfaces/CallFoundInterface";
import { ICallModality } from "App/Interfaces/CallModalityInterfaces";
import { ICallPeriod } from "App/Interfaces/CallPeriodInterfaces";
import { ICallCreditStatusRepository } from "App/Repositories/Sapiencia/CallCreditStatusRepository";
import { ICallFoundRepository } from "App/Repositories/Sapiencia/CallFoundRepository";
import { ICallModalityRepository } from "App/Repositories/Sapiencia/CallModalityRepository";
import { ICallPeriodRepository } from "App/Repositories/Sapiencia/CallPeriodRepository";
import { ApiResponse } from "App/Utils/ApiResponses";

export interface ISapienciaService {
  getAllCallPeriod(): Promise<ApiResponse<ICallPeriod[]>>;
  getAllCallModality(): Promise<ApiResponse<ICallModality[]>>;
  getAllCallFound(): Promise<ApiResponse<ICallFound[]>>;
  getFoundByUser(documente: string): Promise<ApiResponse<ICallFound[]>>;
  getAllCallCreditStatus(): Promise<ApiResponse<ICallCreditStatus[]>>;
}

export default class SapienciaService implements ISapienciaService {
  constructor(
    private callPeriodRepository: ICallPeriodRepository,
    private callModalityRepository: ICallModalityRepository,
    private callFoundRepository: ICallFoundRepository,
    private callCreditStatusRepository: ICallCreditStatusRepository
  ) { }

  async getAllCallPeriod(): Promise<ApiResponse<ICallPeriod[]>> {
    const res = await this.callPeriodRepository.getAllCallPeriod();
    return new ApiResponse(res, EResponseCodes.OK);
  }

  async getAllCallModality(): Promise<ApiResponse<ICallModality[]>> {
    const res = await this.callModalityRepository.getAllCallModality();
    return new ApiResponse(res, EResponseCodes.OK);
  }

  async getAllCallFound(): Promise<ApiResponse<ICallFound[]>> {
    const res = await this.callFoundRepository.getAllCallFound();
    return new ApiResponse(res, EResponseCodes.OK);
  }

  async getAllCallCreditStatus(): Promise<ApiResponse<ICallCreditStatus[]>> {
    const res = await this.callCreditStatusRepository.getAllCallCreditStatus()
    return new ApiResponse(res, EResponseCodes.OK)
  }

  async getFoundByUser(document: string): Promise<ApiResponse<ICallFound[]>> {
    const res = await this.callFoundRepository.getFoundByUser(document);
    return new ApiResponse(res, EResponseCodes.OK);
  }
}
