"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const postgres_1 = require("../libs/postgres");
const postgres_pool_1 = require("../libs/postgres.pool");
class ProductServices {
    products;
    pool;
    constructor() {
        this.products = [];
        this.pool = postgres_pool_1.postgresPool;
        // Configura un manejador de errores para el pool
        this.pool.on('error', (error) => console.log(error));
    }
    async getAllProducts() {
        const client = await (0, postgres_1.getConnection)();
        const rta = await this.pool.query('SELECT * FROM task');
        return rta.rows;
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
