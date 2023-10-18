import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class CallCreditStatus extends BaseModel{
    public static table = "estado_credito";
    public static connection = "mysql_sapiencia";

    @column({ isPrimary: true, columnName: "id", serializeAs: "id" })
    public id: number;
  
    @column({ columnName: "nombre", serializeAs: "name" })
    public name: string;
}