"use strict";
/*
import { Model, DataTypes, Sequelize, Optional } from "sequelize"

// Nombre de la tabla en la base de datos
const PRODUCTS_TABLE = 'products';

// Esquema de las columnas de la tabla
const productSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    price: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    sale: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    img: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    team: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    size: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    players: {
        allowNull: true,
        type: DataTypes.INTEGER,
    },
    season: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    stock: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    technology: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    link: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    brand: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },


}

class Product extends Model {
    static associate() {
        // Definir asociaciones con otros modelos, si es necesario
    }
    static config(sequelize: Sequelize) {
        return {
            sequelize,
            tableName: PRODUCTS_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}



export { PRODUCTS_TABLE, productSchema, Product }
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.productSchema = exports.PRODUCTS_TABLE = void 0;
const sequelize_1 = require("sequelize");
// Nombre de la tabla en la base de datos
const PRODUCTS_TABLE = 'products';
exports.PRODUCTS_TABLE = PRODUCTS_TABLE;
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
        type: sequelize_1.DataTypes.STRING,
    },
    players: {
        allowNull: true,
        type: sequelize_1.DataTypes.STRING,
    },
    season: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    stock: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
    technology: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    link: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    brand: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
};
exports.productSchema = productSchema;
class Product extends sequelize_1.Model {
    id;
    name;
    price;
    sale;
    img;
    team;
    size;
    players;
    season;
    stock;
    technology;
    link;
    brand;
    static associate() {
        // Definir asociaciones con otros modelos, si es necesario
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCTS_TABLE,
            modelName: 'Product',
            timestamps: false
        };
    }
}
exports.Product = Product;
