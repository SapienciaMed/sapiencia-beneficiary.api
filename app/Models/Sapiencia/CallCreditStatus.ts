import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class CallCreditStatus extends BaseModel{
    public static table = "callg_estado_credito";
    public static connection = "mysql_sapiencia";

    @column({ isPrimary: true, columnName: "id_estado", serializeAs: "value" })
    public value: number;
  
    @column({ columnName: "nombre_estado", serializeAs: "name" })
    public name: string;
}