"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresPool = void 0;
const pg_1 = require("pg");
// Importa la configuración del archivo de configuración
const config_1 = require("../../config/config");
// Codifica el usuario y la contraseña para la URI de conexión
const USER = encodeURIComponent(config_1.config.dbUser);
const PASSWORD = encodeURIComponent(config_1.config.dbPassword);
// Construye la URI de conexión utilizando los detalles de configuración
const URI = `postgres://${USER}:${PASSWORD}@${config_1.config.dbHost}:${config_1.config.dbPort}/${config_1.config.dbName};`;
// Crea el pool de conexión utilizando la biblioteca pg
const postgresPool = new pg_1.Pool({ connectionString: URI });
exports.postgresPool = postgresPool;
