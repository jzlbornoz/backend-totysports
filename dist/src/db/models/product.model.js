"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.productSchema = exports.PRODUCTS_TABLE = void 0;
const sequelize_1 = require("sequelize");
// Nombre de la tabla en la base de datos
const PRODUCTS_TABLE = 'products';
exports.PRODUCTS_TABLE = PRODUCTS_TABLE;
// Esquema de las columnas de la tabla
const productSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    price: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
    sale: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
    img: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    team: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    size: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
    players: {
        allowNull: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    season: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
    stock: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
    technology: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
    link: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
    brand: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
};
exports.productSchema = productSchema;
class Product extends sequelize_1.Model {
    static associate() {
        // Definir asociaciones con otros modelos, si es necesario
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCTS_TABLE,
            modelName: 'User',
            timestamps: false
        };
    }
}
exports.Product = Product;
