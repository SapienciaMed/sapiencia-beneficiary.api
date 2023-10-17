import BeneficiaryRepository from "App/Repositories/BeneficiaryRepository";

export interface IBeneficiaryService {}

export default class BeneficiaryService implements IBeneficiaryService {
  constructor(private beneficiaryRepository: BeneficiaryRepository) {}
}
