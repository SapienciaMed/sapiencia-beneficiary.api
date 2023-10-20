import {
  IBeneficiary,
  IBeneficiaryFilter,
} from "App/Interfaces/BeneficiaryInterfaces";
import Beneficiary from "App/Models/Sapiencia/Beneficiary";
import { IPagingData } from "App/Utils/ApiResponses";

export interface IBeneficiaryRepository {
  getBeneficiaryPaginated(
    filter: IBeneficiaryFilter
  ): Promise<IPagingData<IBeneficiary>>;
}

export default class BeneficiaryRepository implements IBeneficiaryRepository {
  constructor() {}

  async getBeneficiaryPaginated(
    payload: IBeneficiaryFilter
  ): Promise<IPagingData<IBeneficiary>> {
    const {
      page,
      perPage,
      ccBeneficiary,
      founds,
      period,
      modality,
      creditStatus,
    } = payload;
    const query = Beneficiary.query();

    if(ccBeneficiary){
      query.where("documento",ccBeneficiary)
    }
    if(founds){
      query.where("id_fondo",founds)
    }
    if(period){
      query.where("id_periodo",period)
    }
    if(modality){
      query.where("tipo_modalidad",modality)
    }
    if(creditStatus){
      query.where("id_estado",creditStatus)
    }
    const { data, meta } = (await query.paginate(page,perPage)).serialize();

    return {
      array: data as IBeneficiary[],
      meta,
    };
  }
}
