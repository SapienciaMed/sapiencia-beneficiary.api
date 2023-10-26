import Application from "@ioc:Adonis/Core/Application";
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
import { generateXLSX } from "App/Utils/generateXLSX";

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
    foundId: number
  ): Promise<ApiResponse<BeneficiaryInfo>>;
  generateXLSXBeneficiary(filer: IBeneficiaryFilter
    ) :Promise<ApiResponse<string>>;
}

export default class BeneficiaryService implements IBenficiaryService {
  constructor(private beneficiaryRepository: BeneficiaryRepository) {}

  public async getAllBeneficiarysPaginated(payload: IBeneficiaryFilter) {
    const res = await this.beneficiaryRepository.getBeneficiaryPaginated(
      payload
    );
    return new ApiResponse(res, EResponseCodes.OK);
  }

  public async getBeneficiaryByDocument(
    document: string,
    foundId: number
  ): Promise<ApiResponse<BeneficiaryInfo>> {
    const res = await this.beneficiaryRepository.getBeneficiaryByDocument(
      document,
      foundId
    );
    return new ApiResponse(res, EResponseCodes.OK);
  }

  async generateXLSXBeneficiary(filter: IBeneficiaryFilter) {
    const beneficiary =
      await this.beneficiaryRepository.getBeneficiaryPaginated(filter);

    const columns = [
      {
        name: "Documento",
        size: 15,
      },
      {
        name: "Nombre completo",
        size: 30,
      },
      {
        name: "Fondo",
        size: 30,
      },
      {
        name: "Periodo",
        size: 15,
      },
      {
        name: "Modalidad",
        size: 15,
      },
      {
        name: "Estado del credito",
        size: 15,
      },
    ];

    const data = beneficiary.array.reduce((prev, curr) => {
      return [
        ...prev,
        [
          String(curr.document),
          curr.fullName,
          curr.found,
          curr.period,
          curr.modality,
          curr.creditStatus,
        ],
      ];
    }, []);

    const filePath = Application.tmpPath("/Beneficiario.xlsx");
    await generateXLSX({
      columns,
      data,
      filePath,
      worksheetName: "Beneficiario",
    });
    return new ApiResponse(filePath, EResponseCodes.OK);
  }

  public async getPQRSDFPaginated(payload: IPQRSDFFilter) {
    const res = await this.beneficiaryRepository.getPQRSDFPaginated(payload);
    return new ApiResponse(res, EResponseCodes.OK);
  }
  public async getAttentionsPaginated(payload: IAttentionsFilter) {
    const res = await this.beneficiaryRepository.getAttentionsPaginated(
      payload
    );
    return new ApiResponse(res, EResponseCodes.OK);
  }
}
