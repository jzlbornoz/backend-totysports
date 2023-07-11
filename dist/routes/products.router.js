"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_services_1 = require("../services/products.services");
const validator_handler_1 = require("../middlewares/validator.handler");
const product_schema_1 = require("../schemas/product.schema");
const router = (0, express_1.Router)();
const services = new products_services_1.ProductServices();
// -- Get
router.get('/', async (req, res) => {
    const products = await services.getAllProducts();
    res.status(200).json(products);
});
router.get('/:id', (0, validator_handler_1.validatorHandler)(product_schema_1.getProductSchema, 'params'), async (req, res, next) => {
    const { id } = req.params;
    const products = await services.findProduct(id);
    res.status(200).json(products);
});
// -- Create
router.post('/', (0, validator_handler_1.validatorHandler)(product_schema_1.createProductSchema, 'body'), async (req, res, next) => {
    const payload = req.body;
    const newProduct = await services.addProduct(payload);
    if (newProduct) {
        res.status(201).json(newProduct);
    }
    else {
        res.status(404).json({
            message: "Fatal error"
        });
    }
});
// -- Update
router.patch('/:id', (0, validator_handler_1.validatorHandler)(product_schema_1.getProductSchema, 'params'), (0, validator_handler_1.validatorHandler)(product_schema_1.updateProductSchema, 'body'), async (request, res, next) => {
    const payload = request.body;
    const { id } = request.params;
    const productToUpdate = await services.findProduct(id);
    if (productToUpdate) {
        res.status(201).json(productToUpdate);
    }
}
// Falta por terminar
);
module.exports = router;
