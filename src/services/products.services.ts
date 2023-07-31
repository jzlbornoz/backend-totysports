import { Sequelize } from "sequelize";
import { sequelizePool } from "../libs/sequelize";
import { Product } from "../db/models/product.model";
import { JerseyModel } from "../types";


export interface ProductsModel extends JerseyModel {
    id: number;
}



class ProductServices {
    products: ProductsModel[];
    pool: Sequelize
    constructor() {
        this.products = []
        this.pool = sequelizePool
    }


    async getAllProducts() {
        const res = await sequelizePool.models.Product.findAll();
        return res;
    }

    async addProduct(payload: Partial<Product>) {
        const newProduct = await sequelizePool.models.Product.create(payload);
        return newProduct;
    }
    async findProduct(payload: string) {
        const productToFind = this.products.find((item) => item.id = parseInt(payload))
        if (productToFind) {
            return productToFind
        }
    }
    async deleteProduct() {

    }
    async updateProduct() {

    }
}

export { ProductServices };