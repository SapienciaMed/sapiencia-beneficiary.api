import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import ExternalRepository from "App/Repositories/ExternalRepository";
import { ApiResponse } from "App/Utils/ApiResponses";
export interface IExternalService {
    getProgramByUser(payload: any)
    getSubjectByUser(payload: any)
}
export default class ExternalService implements IExternalService {
    constructor(private externalRepository: ExternalRepository) { }

    async getProgramByUser(payload: any) {
        const res = await this.externalRepository.getProgramByUser(payload)
        return new ApiResponse(res, EResponseCodes.OK)
    }
    async getSubjectByUser(payload: any) {
        const res = await this.externalRepository.getSubjectByUser(payload)
        return new ApiResponse(res, EResponseCodes.OK)
    }
}