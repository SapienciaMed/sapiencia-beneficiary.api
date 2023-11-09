import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import {
  IPqrsdfFilters,
  IPqrsdf,
} from "App/Interfaces/CitizenAttentionInterfaces";
import { IPagingData, ApiResponse } from "App/Utils/ApiResponses";
import axios, { AxiosInstance } from "axios";


export interface ICitizenAttentionService {
  getPqrsdfPaginated(
    filters: IPqrsdfFilters
  ): Promise<ApiResponse<IPagingData<IPqrsdf>>>;
  getPrograms(): Promise<ApiResponse<any>>
}

export default class CitizenAttentionService
  implements ICitizenAttentionService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.URL_API_CITIZEN_ATTENTION,
    });
  }

  public async getPqrsdfPaginated(
    filters: IPqrsdfFilters
  ): Promise<ApiResponse<IPagingData<IPqrsdf>>> {
    const urlConsumer = `/api/v1/pqrsdf/get-paginated`;

    try {
      const res = await this.axiosInstance.post<
        ApiResponse<IPagingData<IPqrsdf>>
      >(urlConsumer, filters, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: process.env.CURRENT_AUTHORIZATION,
          // permissions: Env.get("CURRENT_PERMISSIONS"),
        },
      });
      return res.data;
    } catch (error) {
      return new ApiResponse(
        { array: [], meta: { total: 0 } },
        EResponseCodes.FAIL,
        String(error)
      );
    }
  }

  public async getPrograms(): Promise<ApiResponse<any>> {
    const urlConsumer = "/get-Programs"

    try {
      const res = await this.axiosInstance.get<ApiResponse<any>>(urlConsumer, {
        headers: {
          Authorization: process.env.CURRENT_AUTHORIZATION,
        },
      })
      return res.data;
    } catch (error) {
      return new ApiResponse(
        { array: [], meta: { total: 0 } },
        EResponseCodes.FAIL,
        String(error)
      );
    }
  }
}
