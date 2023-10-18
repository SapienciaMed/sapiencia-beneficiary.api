import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class CallFound extends BaseModel {
  public static table = "fondos_historico";
  public static connection = "mysql_sapiencia";

  @column({ isPrimary: true, columnName: "id", serializeAs: "id" })
  public id: number;

  @column({ columnName: "fondo", serializeAs: "found" })
  public name: string;
}
