import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'


export default class Beneficiary extends BaseModel {
  public static table = "Vista-desconocinda";
  public static connection = "mysql_sapiencia";

  @column({ isPrimary: true, columnName: "id", serializeAs: "id" })
  public id: number;

  @column({  columnName: "nombre", serializeAs: "fullName" })
  public fullName: string;



}
