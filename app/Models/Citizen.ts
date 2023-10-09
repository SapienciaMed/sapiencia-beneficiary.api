import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Citizen extends BaseModel {
  public static table = "CIU_CIUDADANOS";

  @column({ isPrimary: true, columnName: "CIU_CODIGO", serializeAs: "id" })
  public id: number;
}
