import { Pool } from "pg";

let conn;

if (!conn) {
  conn = new Pool({
    user: process.env.PGSQL_USER || 'postgres',
    password: process.env.PGSQL_PASSWORD || 'test123',
    host: process.env.PGSQL_HOST || '127.0.0.1',
    port: process.env.PGSQL_PORT || 5432,
    database: process.env.PGSQL_DATABASE || 'envision-monitoring',
  });
}

export default conn ;