import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class CallPeriod extends BaseModel {
  public static table = "periodo_convocatoria";
  public static connection = "mysql_sapiencia";

  @column({ isPrimary: true, columnName: "id", serializeAs: "value" })
  public value: number;

  @column({ columnName: "nombre", serializeAs: "name" })
  public name: string;
}
