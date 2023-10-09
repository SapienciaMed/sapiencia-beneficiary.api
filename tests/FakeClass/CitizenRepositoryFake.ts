import { ICitizen } from "App/Interfaces/CitizenInterfaces";
import { ICitizenRepository } from "App/Repositories/CitizenRepository";

export class CitizenRepositoryFake implements ICitizenRepository {
  getCitizenByIds(_id: number[]): Promise<ICitizen[]> {
    throw new Error("Method not implemented.");
  }
  getCitizenById(_id: number): Promise<ICitizen[]> {
    return new Promise((res) => {
      res([]);
    });
  }

  getCitizenByAdditionalField(
    _id: number,
    _parentCode: string
  ): Promise<ICitizen[]> {
    return new Promise((res) => {
      res([]);
    });
  }
}
