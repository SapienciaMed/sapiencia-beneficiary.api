import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class CallPeriod extends BaseModel {
  public static table = "periodo_convocatoria";
  public static connection = "mysql_sapiencia";

  @column({ isPrimary: true, columnName: "id", serializeAs: "id" })
  public id: number;

  @column({ columnName: "nombre", serializeAs: "name" })
  public name: string;
}
