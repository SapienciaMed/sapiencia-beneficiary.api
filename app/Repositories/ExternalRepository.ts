import Database from "@ioc:Adonis/Lucid/Database";

export interface IExternalRepository {
    getProgramByUser(payload: any): Promise<any>
    getSubjectByUser(payload: any): Promise<any>
}

export default class ExternalRepository {
    async getProgramByUser(payload): Promise<any> {

        const { identification } = payload
        const query = `SELECT DISTINCT(PRG.PRG_CODIGO) AS value , PRG.PRG_DESCRIPCION as name FROM PRG_PROGRAMAS PRG
        INNER JOIN PQR_PQRSDF PQR ON PQR.PQR_CODPRG_PROGRAMA = PRG.PRG_CODIGO
        INNER JOIN PER_PERSONAS PER ON PER.PER_CODIGO = PQR.PQR_CODPER_PERSONA
        WHERE PER.PER_NUMERO_DOCUMENTO = "${identification}"`;

        const result = await Database.connection('mysql_aurora_atentcion_ciudadana').rawQuery(query);

        const data = result[0]

        return data
    }
    async getSubjectByUser(payload): Promise<any> {

        const { identification } = payload
        const query = `SELECT DISTINCT(ASO.ASO_CODIGO) AS value, ASO.ASO_ASUNTO AS name
        FROM ASO_ASUNTO_SOLICITUD ASO
        INNER JOIN PQR_PQRSDF PQR ON PQR.PQR_CODASO_ASO_ASUNTO_SOLICITUD = ASO.ASO_CODIGO
        INNER JOIN PER_PERSONAS PER ON PER.PER_CODIGO = PQR.PQR_CODPER_PERSONA
        WHERE PER.PER_NUMERO_DOCUMENTO = "${identification}" AND ASO.ASO_ACTIVO = 1`;

        const result = await Database.connection('mysql_aurora_atentcion_ciudadana').rawQuery(query);

        const data = result[0]

        return data
    }
}