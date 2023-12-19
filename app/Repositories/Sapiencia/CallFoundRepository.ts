import Database from "@ioc:Adonis/Lucid/Database";
import { ICallFound } from "App/Interfaces/CallFoundInterface";
import CallFound from "App/Models/Sapiencia/CallFound"

export interface ICallFoundRepository {
    getAllCallFound(): Promise<ICallFound[]>
    getFoundByUser(document: string): Promise<ICallFound[]>
}

export default class CallFoundRepository implements ICallFoundRepository {
    constructor() { }

    async getAllCallFound(): Promise<ICallFound[]> {
        const res = await CallFound.query();
        return res.map((i) => i.serialize() as ICallFound)
    }

    async getFoundByUser(document: string): Promise<ICallFound[]> {
        const query = `SELECT DISTINCT (id_fondo) AS value ,nombrefondo AS name FROM giro_vwbeneficiario_proyec_renova_giro WHERE documento_beneficiario = "${document}"`
        const result = await Database.connection('mysql_sapiencia').rawQuery(query)
        const data = result[0][0]

        return data
    }
}