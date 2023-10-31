import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class BenefitsBeneficiary extends BaseModel {
    public static table = "giro_vwbeneficiario_proyec_renova_giro";
    public static connection = "mysql_sapiencia";

    @column({ columnName: "perido_legalizacion", serializeAs: "Legalization_period" })
    public Legalization_period: string;
    @column({ columnName: "estado_credito", serializeAs: "status" })
    public status: string;
    @column({ columnName: "valor_girado_matricula", serializeAs: "OrderEnrollment" })
    public OrderEnrollment: string;
    @column({ columnName: "valor_girado_sostenimiento", serializeAs: "OrderSustenance" })
    public OrderSustenance: string;
    @column({ columnName: "total_girado", serializeAs: "TotalOrder" })
    public TotalOrder: string;
    @column({ columnName: "perido_legalizacion", serializeAs: "StatusOrder" })
    public StatusOrder: string;
    @column({ columnName: "fecharegistro", serializeAs: "DateOrder" })
    public DateOrder: string;
}