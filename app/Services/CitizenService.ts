import { ICitizen } from "App/Interfaces/CitizenInterfaces";
import { ICitizenRepository } from "App/Repositories/CitizenRepository";
import { ApiResponse } from "App/Utils/ApiResponses";
import { EResponseCodes } from "../Constants/ResponseCodesEnum";

export interface ICitizenService {
  getCitizenById(id: number): Promise<ApiResponse<ICitizen[]>>;
}

export default class CitizenService implements ICitizenService {
  constructor(private citizenRepository: ICitizenRepository) {}

  async getCitizenById(id: number): Promise<ApiResponse<ICitizen[]>> {
    const res = await this.citizenRepository.getCitizenById(id);

    if (!res) {
      return new ApiResponse([], EResponseCodes.FAIL, "Registro no encontrado");
    }

    return new ApiResponse(res, EResponseCodes.OK);
  }
}
