import express, { Express, Router } from "express";
import { ProductServices } from "../services/products.services";
import { JerseyModel } from "../interfaces/Jersey.model";

const router = Router();
const services = new ProductServices();

router.get('/', async (req, res) => {
    const products = await services.getAllProducts();
    res.status(200).json(products);
})

router.post('/', async (req, res) => {
    const payload: JerseyModel = req.body;
    await services.addProduct(payload);
    res.status(201).json({
        message: "Creado"
    })
})

module.exports = router;