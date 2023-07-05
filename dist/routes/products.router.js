"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_services_1 = require("../services/products.services");
const router = (0, express_1.Router)();
const services = new products_services_1.ProductServices();
router.get('/', async (req, res) => {
    const products = await services.getAllProducts();
    res.status(200).json(products);
});
module.exports = router;