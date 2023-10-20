import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Beneficiary extends BaseModel {
  public static table = "DataAurora";
  public static connection = "mysql_sapiencia";

  @column({ columnName: "nombreCompleto", serializeAs: "fullName" })
  public fullName: string;

  @column({ columnName: "TipoDocumento", serializeAs: "typeDocument" })
  public typeDocument: string;

  @column({ columnName: "documento", serializeAs: "document" })
  public document: number;

  @column({ columnName: "fondo", serializeAs: "found" })
  public found: string;

  @column({ columnName: "periodo_convocatoria", serializeAs: "period" })
  public period: string;

  @column({ columnName: "Modalidad", serializeAs: "modality" })
  public modality: string;

  @column({ columnName: "estado_credito", serializeAs: "creditStatus" })
  public creditStatus: string;
}
