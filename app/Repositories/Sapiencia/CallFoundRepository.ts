import { ICallFound } from "App/Interfaces/CallFoundInterface";
import CallFound from "App/Models/Sapiencia/CallFound"

export interface ICallFoundRepository{
    getAllCallFound ():Promise<ICallFound[]>
}

export default class CallFoundRepository implements ICallFoundRepository{
    constructor(){}

    async getAllCallFound():Promise<ICallFound[]>{
        const res = await CallFound.query();
        return res.map ((i) => i.serialize() as ICallFound)
    }
}