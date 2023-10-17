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
    filter: IBeneficiaryFilter
  ): Promise<IPagingData<IBeneficiary>> {
    const query = Beneficiary.query();

    if (filter.document) {
      query.where("document", filter.document);
    }

    const res = await query.paginate(filter.page, filter.perPage);

    const { data, meta } = res.serialize();

    return {
      array: data as IBeneficiary[],
      meta,
    };
  }
}
