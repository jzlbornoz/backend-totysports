import { Router, Response, Request, NextFunction } from "express";
import { ProductServices } from "../services/products.services";
import { JerseyModel } from "../interfaces/Jersey.model";
import { validatorHandler } from "../middlewares/validator.handler";
import { createProductSchema, getProductSchema } from "../schemas/product.schema";

const router = Router();
const services = new ProductServices();


// -- Get
router.get('/',
    async (req: Request, res: Response) => {
        const products = await services.getAllProducts();
        res.status(200).json(products);
    })

router.get('/:id',
    validatorHandler(getProductSchema, 'params'),
    async (req: Request, res: Response, next: NextFunction) => {
        const products = await services.getAllProducts();
        res.status(200).json(products);
    })

// -- Create
router.post('/',
    validatorHandler(createProductSchema, 'body'),
    async (req: Request, res: Response, next: NextFunction) => {
            const payload: JerseyModel = req.body;
            const newProduct = await services.addProduct(payload);
            if (newProduct) {
                res.status(201).json(newProduct);
            } else {
                res.status(404).json({
                    message: "Fatal error"
                })
            }
    })

// -- Update
router.post('/',
)

module.exports = router;