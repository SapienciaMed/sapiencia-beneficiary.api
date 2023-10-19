import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Beneficiary extends BaseModel {
  public static table = "Vista-desconocinda";
  public static connection = "mysql_sapiencia";

  @column({ isPrimary: true, columnName: "id", serializeAs: "value" })
  public value: number;

  @column({ columnName: "nombre", serializeAs: "fullName" })
  public fullName: string;

  @column({ columnName: "tipoDocumento", serializeAs: "typeDocument" })
  public typeDocument: string;

  @column({ columnName: "documento", serializeAs: "document" })
  public document: number;

  @column({ columnName: "fondo", serializeAs: "found" })
  public found: number;

  @column({ columnName: "periodo", serializeAs: "period" })
  public period: number;

  @column({ columnName: "modalidad", serializeAs: "modality" })
  public modality: number;

  @column({ columnName: "estado de credito", serializeAs: "creditStatus" })
  public creditStatus: number;
}
