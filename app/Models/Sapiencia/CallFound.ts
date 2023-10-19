import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class CallFound extends BaseModel {
  public static table = "fidu_fondo";
  public static connection = "mysql_sapiencia";

  @column({ isPrimary: true, columnName: "idfondo", serializeAs: "value" })
  public value: number;

  @column({ columnName: "nombrefondo", serializeAs: "name" })
  public name: string;
}
