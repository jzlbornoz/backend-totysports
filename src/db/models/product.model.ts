import { Model, DataTypes, Sequelize } from "sequelize"

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