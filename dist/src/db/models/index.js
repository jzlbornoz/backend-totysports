"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpModel = void 0;
const product_model_1 = require("./product.model");
// Funcion para configurar el modelo de datos en sequelize
function setUpModel(sequelize) {
    /* Inicializa el modelo product utilizando el esquema definido en el ProductSchema
    y la configuracion especificada en Product.config(sequeliza) */
    product_model_1.Product.init(product_model_1.productSchema, product_model_1.Product.config(sequelize));
}
exports.setUpModel = setUpModel;
