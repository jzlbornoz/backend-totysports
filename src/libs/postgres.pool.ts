import { Pool } from "pg";

// Importa la configuración del archivo de configuración
import { config } from "../../config/config";

// Codifica el usuario y la contraseña para la URI de conexión
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

// Construye la URI de conexión utilizando los detalles de configuración
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName};`

// Crea el pool de conexión utilizando la biblioteca pg
const postgresPool: Pool = new Pool({ connectionString: URI });

export { postgresPool };