"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
class ProductServices {
    products;
    constructor() {
        this.products = [];
    }
    async getAllProducts() {
        return this.products;
    }
    async addProduct(payload) {
        const productToAdd = payload;
        this.products.push(payload);
        return productToAdd;
    }
    findProduct() {
    }
    deleteProduct() {
    }
    updateProduct() {
    }
}
exports.ProductServices = ProductServices;
