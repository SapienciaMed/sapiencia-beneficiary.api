import { ICallCreditStatus } from "App/Interfaces/CallCreditStatusInterfaces";
import CallCreditStatus from "App/Models/Sapiencia/CallCreditStatus";

export interface ICallCreditStatusRepository{
    getAllCallCreditStatus():Promise<ICallCreditStatus[]>
}

export default class CallCreditStatusRepository implements ICallCreditStatusRepository {
    constructor(){}

    async getAllCallCreditStatus(): Promise<ICallCreditStatus[]>{
        const res = await CallCreditStatus.query()
        return res.map((i)=> i.serialize() as ICallCreditStatus)
    }
}