import { Sequelize } from "sequelize";
import { Product, productSchema } from "./product.model";


// Funcion para configurar el modelo de datos en sequelize
function setUpModel(sequelize: Sequelize) {
    /* Inicializa el modelo product utilizando el esquema definido en el ProductSchema 
    y la configuracion especificada en Product.config(sequeliza) */
    Product.init(productSchema, Product.config(sequelize));
}

export { setUpModel }