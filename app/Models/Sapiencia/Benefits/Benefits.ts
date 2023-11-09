import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

export default class BenefitsBeneficiary extends BaseModel {
    public static table = "AuroraBeneficiosBeneficiarios";
    public static connection = "mysql_sapiencia";

    @column({ columnName: "id_fondo", serializeAs: "id_found" })
    public id_found: number;
    @column({ columnName: "tipo_modalidad", serializeAs: "id_modality" })
    public id_modality: number;
    @column({ columnName: "Periodo_calculado_proyectado", serializeAs: "PeriodCalculateProjection" })
    public PeriodCalculateProjection: string;
    @column({ columnName: "numero_semestre_proyectado", serializeAs: "NumberPeriodCalculateProjection" })
    public NumberPeriodCalculateProjection: string;
    @column({ columnName: "valor_proeyctado_matricula", serializeAs: "ProjectionEnrollment" })
    public ProjectionEnrollment: string;
    @column({ columnName: "valor_proeyctado_sosteneimiento", serializeAs: "ProjectionSustenance" })
    public ProjectionSustenance: string;
    @column({ columnName: "total_proyectado", serializeAs: "TotalProjection" })
    public TotalProjection: string;
    @column({ columnName: "periodo_calculado", serializeAs: "calculatePeriod" })
    public calculatePeriod: number;
    @column({ columnName: "Periodo_calculado_nombre", serializeAs: "calculatePeriodName" })
    public calculatePeriodName: string;
    @column({ columnName: "valor_girado_matricula", serializeAs: "OrderEnrollment" })
    public OrderEnrollment: string;
    @column({ columnName: "valor_girado_sostenimiento", serializeAs: "OrderSustenance" })
    public OrderSustenance: string;
    @column({ columnName: "total_girado", serializeAs: "OrderTotal" })
    public OrderTotal: string;
    @column({ columnName: "estado_credito", serializeAs: "statusCredit" })
    public statusCredit: string;
    @column({ columnName: "fecharegistro", serializeAs: "DateOrder" })
    public DateOrder: DateTime;
}