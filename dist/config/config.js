"use strict";
/* require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
};

module.exports = { config }; */
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require('dotenv').config();
// Configuración actual
const config = {
    env: process.env.NODE_ENV || 'dev',
    port: parseInt(process.env.PORT || '3000', 10),
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbHost: process.env.DB_HOST || '',
    dbPort: parseInt(process.env.DB_PORT || '0', 10),
    dbName: process.env.DB_NAME || '',
};
exports.config = config;
