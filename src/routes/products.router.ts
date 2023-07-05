import express, { Express, Router } from "express";
import { ProductServices } from "../services/products.services";

const router = Router();
const services = new ProductServices();

router.get('/', async (req, res) => {
    const products = await services.getAllProducts();
    res.status(200).json(products);
})

module.exports = router;