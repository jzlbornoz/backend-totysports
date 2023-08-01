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

import { Model, DataTypes, Sequelize } from "sequelize";

// Nombre de la tabla en la base de datos
const PRODUCTS_TABLE = 'products';

// Esquema de las columnas de la tabla
interface ProductAttributes {
    id: number;
    name: string;
    price: number;
    sale: number;
    img: string[];
    team: string;
    size: string;
    players: string | null;
    season: string;
    stock: number;
    technology: string;
    link: string;
    brand: string;
}

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
        type: DataTypes.ARRAY(DataTypes.STRING),
    },
    team: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    size: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    players: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    season: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    stock: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    technology: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    link: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    brand: {
        allowNull: false,
        type: DataTypes.STRING,
    },
};

class Product extends Model<ProductAttributes> implements ProductAttributes {
    public id!: number;
    public name!: string;
    public price!: number;
    public sale!: number;
    public img!: string[];
    public team!: string;
    public size!: string;
    public players!: string | null;
    public season!: string;
    public stock!: number;
    public technology!: string;
    public link!: string;
    public brand!: string;

    static associate() {
        // Definir asociaciones con otros modelos, si es necesario
    }

    static config(sequelize: Sequelize) {
        return {
            sequelize,
            tableName: PRODUCTS_TABLE,
            modelName: 'Product',
            timestamps: false
        };
    }
}

export { PRODUCTS_TABLE, productSchema, Product };