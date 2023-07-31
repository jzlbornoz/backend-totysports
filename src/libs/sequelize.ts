import { Sequelize } from "sequelize";
import { config } from "../../config/config"
import { setUpModel } from "../db/models";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelizePool = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

setUpModel(sequelizePool);

// Sincronización automática de tablas
sequelizePool.sync()
  .then(() => {
    console.log('Tablas sincronizadas correctamente.');
  })
  .catch(error => {
    console.error('Error al sincronizar tablas:', error);
  });

export { sequelizePool };  