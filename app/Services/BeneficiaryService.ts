import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import {
  BeneficiaryInfo,
  IAttentions,
  IAttentionsFilter,
  IBeneficiary,
  IBeneficiaryFilter,
  IPQRSDF,
  IPQRSDFFilter,
} from "App/Interfaces/BeneficiaryInterfaces";
import BeneficiaryRepository from "App/Repositories/BeneficiaryRepository";
import { ApiResponse, IPagingData } from "App/Utils/ApiResponses";

export interface IBenficiaryService {
  getAllBeneficiarysPaginated(
    payload: IBeneficiaryFilter
  ): Promise<ApiResponse<IPagingData<IBeneficiary>>>;
  getPQRSDFPaginated(
    payload: IPQRSDFFilter
  ): Promise<ApiResponse<IPagingData<IPQRSDF>>>;
  getAttentionsPaginated(
    payload: IAttentionsFilter
  ): Promise<ApiResponse<IPagingData<IAttentions>>>;
  getBeneficiaryByDocument(
    document: string,
    foundId: number,
  ): Promise<ApiResponse<BeneficiaryInfo>>;
}

export default class BeneficiaryService implements IBenficiaryService {
  constructor(private beneficiaryRepository: BeneficiaryRepository) {}

  public async getAllBeneficiarysPaginated(payload: IBeneficiaryFilter) {
    const res = await this.beneficiaryRepository.getBeneficiaryPaginated(
      payload
    );
    return new ApiResponse(res, EResponseCodes.OK);
  }

  async getBeneficiaryByDocument(
    document: string,
    foundId: number,
  ): Promise<ApiResponse<BeneficiaryInfo>> {
    const res = await this.beneficiaryRepository.getBeneficiaryByDocument(
      document,
      foundId,
    );
    return new ApiResponse(res, EResponseCodes.OK);
  }
  public async getPQRSDFPaginated(payload: IPQRSDFFilter) {
    const res = await this.beneficiaryRepository.getPQRSDFPaginated(payload);
    return new ApiResponse(res, EResponseCodes.OK);
  }
  public async getAttentionsPaginated(payload: IAttentionsFilter) {
    const res = await this.beneficiaryRepository.getAttentionsPaginated(payload);
    return new ApiResponse(res, EResponseCodes.OK);
  }
}
