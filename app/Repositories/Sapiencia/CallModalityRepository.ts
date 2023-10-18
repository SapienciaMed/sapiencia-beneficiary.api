import { ICallModality } from "App/Interfaces/CallModalityInterfaces";
import CallModality from "App/Models/Sapiencia/CallModality";

export interface ICallModalityRepository {
  getAllCallModality(): Promise<ICallModality[]>;
}

export default class CallModalityRepository implements ICallModalityRepository {
  constructor() {}

  async getAllCallModality(): Promise<ICallModality[]> {
    const res = await CallModality.query();
    return res.map((i) => i.serialize() as ICallModality);
  }
}
