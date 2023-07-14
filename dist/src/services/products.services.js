"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const sequelize_1 = require("../libs/sequelize");
class ProductServices {
    products;
    constructor() {
        this.products = [];
    }
    async getAllProducts() {
        const res = await sequelize_1.sequelizePool.models.Products.findAll();
        return res;
    }
    async addProduct(payload) {
        const productToAdd = payload;
        this.products.push({
            id: 12,
            ...payload
        });
        return productToAdd;
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
