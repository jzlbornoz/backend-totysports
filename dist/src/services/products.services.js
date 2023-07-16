"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const sequelize_1 = require("../libs/sequelize");
class ProductServices {
    products;
    pool;
    constructor() {
        this.products = [];
        this.pool = sequelize_1.sequelizePool;
    }
    async getAllProducts() {
        const res = await sequelize_1.sequelizePool.models.Product.findAll();
        return res;
    }
    async addProduct(payload) {
        const newProduct = await sequelize_1.sequelizePool.models.Product.create(payload);
        return newProduct;
    }
    async findProduct(payload) {
        const productToFind = this.products.find((item) => item.id = parseInt(payload));
        if (productToFind) {
            return productToFind;
        }
    }
    async deleteProduct() {
    }
    async updateProduct() {
    }
}
exports.ProductServices = ProductServices;
