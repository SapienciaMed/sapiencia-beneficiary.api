import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "CIU_CIUDADANOS";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.comment(
        "Tabla"
      );
      table
        .increments("CIU_CODIGO")
        .unsigned()
        .primary()
        .comment("llave primaria");

    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
