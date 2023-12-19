/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from "@ioc:Adonis/Core/Env";
import { DatabaseConfig } from "@ioc:Adonis/Lucid/Database";

const databaseConfig: DatabaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */
  connection: Env.get("DB_CONNECTION"),

  connections: {
    mysql2: {
      client: "mysql2",
      connection: {
        host: Env.get("MYSQL_HOST"),
        port: Env.get("MYSQL_PORT"),
        user: Env.get("MYSQL_USER"),
        password: Env.get("MYSQL_PASSWORD", ""),
        database: Env.get("MYSQL_DB_NAME"),
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: false,
      debug: false,
    },
    mysql_sapiencia: {
      client: "mysql2",
      connection: {
        host: Env.get("MYSQL2_HOST"),
        port: Env.get("MYSQL2_PORT"),
        user: Env.get("MYSQL2_USER"),
        password: Env.get("MYSQL2_PASSWORD", ""),
        database: Env.get("MYSQL2_DB_NAME"),
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: false,
      debug: false,
    },
    mysql_aurora_atentcion_ciudadana: {
      client: "mysql2",
      connection: {
        host: Env.get("MYSQL_HOST"),
        port: Env.get("MYSQL_PORT"),
        user: Env.get("MYSQL_USER"),
        password: Env.get("MYSQL_PASSWORD", ""),
        database: Env.get("MYSQL_DB_NAME2"),
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: false,
      debug: false,
    }
  },
};

export default databaseConfig;
