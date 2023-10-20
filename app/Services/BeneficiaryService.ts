import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import { IBeneficiary, IBeneficiaryFilter } from "App/Interfaces/BeneficiaryInterfaces";
import BeneficiaryRepository from "App/Repositories/BeneficiaryRepository";
import { ApiResponse, IPagingData } from "App/Utils/ApiResponses";

export interface IBenficiaryService{
    getAllBeneficiarysPaginated(payload:IBeneficiaryFilter):Promise <ApiResponse<IPagingData<IBeneficiary>>>;
}

export default class BeneficiaryService implements IBenficiaryService{
    constructor(private beneficiaryRepository:BeneficiaryRepository){}

    public async getAllBeneficiarysPaginated (payload: IBeneficiaryFilter){
        const res = await this.beneficiaryRepository.getBeneficiaryPaginated(payload);
        return new ApiResponse(res, EResponseCodes.OK);
    }
}