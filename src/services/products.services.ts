import { JerseyModel } from "../interfaces/Jersey.model";

class ProductServices {
    products: JerseyModel[];
    constructor() {
        this.products = []
    }


    async getAllProducts() {
        return this.products;
    }

    async addProduct(payload: JerseyModel) {
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

export { ProductServices };