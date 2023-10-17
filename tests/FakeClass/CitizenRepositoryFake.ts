import { ICitizen } from "App/Interfaces/CitizenInterfaces";
import { ICitizenRepository } from "App/Repositories/CitizenRepository";

export class CitizenRepositoryFake implements ICitizenRepository {
  getCitizenById(_id: number): Promise<ICitizen[]> {
    return new Promise((res) => {
      res([]);
    });
  }
}
