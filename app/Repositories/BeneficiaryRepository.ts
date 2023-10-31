import Database from "@ioc:Adonis/Lucid/Database";
import { DATABASE_ERRORS } from "App/Constants/DatabaseErrors";
import {
  BeneficiaryInfo,
  IAttentions,
  IAttentionsFilter,
  IBeneficiary,
  IBeneficiaryFilter,
  IBenefits,
  IBenefitsFilter,
  IPQRSDF,
  IPQRSDFFilter,
} from "App/Interfaces/BeneficiaryInterfaces";
import Beneficiary from "App/Models/Sapiencia/Beneficiary";
import BenefitsBeneficiary from "App/Models/Sapiencia/Benefits";
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
    foundId: number
  ): Promise<BeneficiaryInfo>;
  getBeneftisPaginated(filter: IBenefitsFilter): Promise<IPagingData<IBenefits>>
}

export default class BeneficiaryRepository implements IBeneficiaryRepository {
  constructor() { }

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
    if (creditStatus != null || creditStatus != undefined) {
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


  async getBeneficiaryByDocument(document: string, foundId: number) {
    try {
      return await Database.connection("mysql_sapiencia").rawQuery(
        "call infoBeneficiario (:Documento, :FondoId)",
        {
          Documento: document,
          FondoId: foundId,
        }
      );
    } catch (err) {
      if (err.message?.includes(DATABASE_ERRORS.E_ROW_NOT_FOUND)) {
        throw new Error("No existen datos del  Beneficiario");
      }
      throw new Error(err);
    }
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

  async getBeneftisPaginated(payload: IBenefitsFilter) {
    const { page, perPage, document, foundID } = payload
    const query = BenefitsBeneficiary.query();


    if (document) {
      query.where("documento_beneficiario", document)
    }
    if (foundID) {
      query.where("id_fondo", foundID)
    }

    const { data, meta } = (await query.paginate(page, perPage)).serialize()

    return {
      array: data as IBenefits[],
      meta,
    }
  }
}
