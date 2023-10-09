import { ICitizen } from "App/Interfaces/CitizenInterfaces";
import Citizen from "../Models/Citizen";

export interface ICitizenRepository {
  getCitizenById(id: number): Promise<ICitizen[]>;
}

export default class CitizenRepository implements ICitizenRepository {
  constructor() {}

  async getCitizenById(id: number): Promise<ICitizen[]> {
    const res = await Citizen.query().where("id", id);
    return res.map((i) => i.serialize() as ICitizen);
  }
}
