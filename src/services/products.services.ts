import { Sequelize } from "sequelize";
import { sequelizePool } from "../libs/sequelize";
import { Product } from "../db/models/product.model";


export interface ProductsModel {
    id: number;
    name: string;
    size: string[];
    price: number;
    sale: number;
    team: string;
    players?: string[];
    season: string;
    stock: number;
    technology: string[];
    link: string;
    img: string[];
    brand: string;
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