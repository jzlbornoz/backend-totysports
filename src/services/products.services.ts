import { JerseyModel } from "../interfaces/Jersey.model";
import { getConnection } from "../libs/postgres";

export interface ProductsModel {
    id: number;
    name: string;
    size: string[];
    price: number;
    sale: number;
    team: string;
    players?: string[];
    season: string | string[];
    stock: number;
    technology: string[];
    link: string;
    img: string[];
    brand: string;
}

class ProductServices {
    products: ProductsModel[];
    constructor() {
        this.products = []
    }


    async getAllProducts() {
        const client = await getConnection();
        const rta = await client.query('SELECT * FROM task');
        return rta.rows;
    }

    async addProduct(payload: JerseyModel) {
        const productToAdd = payload;
        this.products.push({
            id: 12,
            ...payload
        });
        return productToAdd;
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