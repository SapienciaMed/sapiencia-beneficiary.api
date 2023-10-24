import Database from "@ioc:Adonis/Lucid/Database";
import {
  IAttentions,
  IAttentionsFilter,
  IBeneficiary,
  IBeneficiaryFilter,
  IPQRSDF,
  IPQRSDFFilter,
} from "App/Interfaces/BeneficiaryInterfaces";
import Beneficiary from "App/Models/Sapiencia/Beneficiary";
import PQRSDFModel from "App/Models/Sapiencia/PQRSDF";
import Attentions from "App/Models/Sapiencia/PQRSDF";
import { IPagingData } from "App/Utils/ApiResponses";

export interface IBeneficiaryRepository {
  getBeneficiaryPaginated(
    filter: IBeneficiaryFilter
  ): Promise<IPagingData<IBeneficiary>>;
  getPQRSDFPaginated(filter: IPQRSDFFilter): Promise<IPagingData<IPQRSDF>>;
  getAttentionsPaginated(
    filter: IAttentionsFilter
  ): Promise<IPagingData<IAttentions>>;
  getBeneficiaryByDocument(
    document: string,
    foundId: number,
    modalityType: number
  ): Promise<Array<any>>;
}

export default class BeneficiaryRepository implements IBeneficiaryRepository {
  constructor() {}

  async getBeneficiaryByDocument(
    document: string,
    foundId: number,
    _modalityType: number
  ): Promise<Array<any>> {
    const res = await Database.connection("mysql_sapiencia").rawQuery(
      `call infoBeneficiario (${document}, ${foundId})`
    );

    console.log(res);

    return [];
  }

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

    if (ccBeneficiary) {
      query.where("documento", ccBeneficiary);
    }
    if (founds) {
      query.where("id_fondo", founds);
    }
    if (period) {
      query.where("id_periodo", period);
    }
    if (modality) {
      query.where("tipo_modalidad", modality);
    }
    if (creditStatus) {
      query.where("id_estado", creditStatus);
    }
    const { data, meta } = (await query.paginate(page, perPage)).serialize();

    return {
      array: data as IBeneficiary[],
      meta,
    };
  }

  async getPQRSDFPaginated(
    payload: IPQRSDFFilter
  ): Promise<IPagingData<IPQRSDF>> {
    const { page, perPage, PQRSDF, Subject, Program } = payload;

    const query = PQRSDFModel.query();

    if (PQRSDF) {
    }
    if (Subject) {
    }
    if (Program) {
    }
    const { data, meta } = (await query.paginate(page, perPage)).serialize();

    return { array: data as IPQRSDF[], meta };
  }

  async getAttentionsPaginated(
    payload: IAttentionsFilter
  ): Promise<IPagingData<IAttentions>> {
    const { page, perPage, registrationDate, program } = payload;

    const query = Attentions.query();

    if (registrationDate) {
    }
    if (program) {
    }
    const { data, meta } = (await query.paginate(page, perPage)).serialize();

    return { array: data as IAttentions[], meta };
  }
}
