export type IDatabaseError = {
  code: string;
  message: string;
  sqlMessage: string;
};

export const enum DATABASE_ERRORS {
  ER_DUP_ENTRY = "ER_DUP_ENTRY",
  ER_ROW_IS_REFERENCED_2 = "ER_ROW_IS_REFERENCED_2",
  E_ROW_NOT_FOUND = "E_ROW_NOT_FOUND",
}

export const enum BENEFICIARY_SQL_ERROR {
  PLATE_DUPLICATE = "bie_bienes_inmueble_bie_placa_activo_unique",
}
