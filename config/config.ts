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

require('dotenv').config();

interface Config {
    env: string;
    port: number;
    dbUser: string;
    dbPassword: string;
    dbHost: string;
    dbPort: number;
    dbName: string;
}

// Configuración actual
const config: Config = {
    env: process.env.NODE_ENV || 'dev',
    port: parseInt(process.env.PORT || '3000', 10),
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbHost: process.env.DB_HOST || '',
    dbPort: parseInt(process.env.DB_PORT || '0', 10),
    dbName: process.env.DB_NAME || '',
};

export { config };